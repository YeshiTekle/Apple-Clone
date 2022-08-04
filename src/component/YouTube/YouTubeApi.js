import React, { useEffect, useState } from "react";
import "./youtubestyle.css";

function YouTubeApi() {
  const [youtubevideos, setyoutubevideos]=useState([]);
  useEffect(()=>{
      fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCgQF-PYIcUDF7PtXwaOrNcEWplqc_wqYA&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
      )
        // fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_MY_API_KEY}&channelId=UCDRv0_awzQ-G9TD6XB4zT2Q&part=snippet,id&order=date&maxResults=6`)
        // fetch('youtubetest.json')
        .then((response) => response.json())
        .then((data) => {
          const youtubedata = data.items;
          setyoutubevideos(youtubedata);
        });

  },[]);

  console.log(youtubevideos)
  return (
      <div>
    <div className="row  whole-section ">
    <div className="col-12 row align-items-center justify-content-center text-center">
      <div className="text-center h1 font-weight-bold pt-5 pb-3">
        Latest videos
      </div >
      <div className="row">
        {youtubevideos?.map((singleVideo,i)=>
        {
            let vidId=singleVideo.id.videoId
            let videolink=`https://www.youtube.com/watch?v=${vidId}`
            let thumb=singleVideo.snippet.thumbnails.high.url
            let title=singleVideo.snippet.title
            let description=singleVideo.snippet.description

let vidlink=(
      <div className="vids ">
        <div className="singleVideoWrapper ">
          <a href={videolink}>
            {
              <img
                className=""
                src={thumb}
              ></img>
            }
            <div className="black font-weight-bold">
              {title}
            </div>
          </a>

          {/* <div className="discription">
            {description}
          </div> */}
        </div>
      </div>)
      return (
      <div key={i} className="col-sm-12 col-md-4">
        {vidlink}
      </div>)
    }
  )}
  </div>
    </div>
  </div>
</div>
  );
}

export default YouTubeApi;
