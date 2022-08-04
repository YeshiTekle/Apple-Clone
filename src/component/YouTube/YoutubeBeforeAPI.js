import React, { useEffect,useState } from 'react'
// import from "../../../youtubepack.json" 
import './youtubestyle.css'

function YoutubeBeforeAPI() {
   
    // const [youtubevideos, setyoutubevideos]=useState([]);
    // useEffect(()=>{
    //     fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjZ-9-Buml44ls98csL-d3vDN5IhaKc0A&channelId=UCDRv0_awzQ-G9TD6XB4zT2Q&part=snippet,id&order=date&maxResults=3')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         const youtubedata=data.items;
    //         setyoutubevideos(youtubedata);
    //     });
    //     // .then((response)=>response.json())
    //     // .then((data)=>{
    //     //     const youtubedata=data.items;
    //     //     setyoutubevideos(youtubedata);
    //     // });
    // },[]);

    // console.log(youtubevideos)
  return (
    // <div className='col-md-3'>
    //     {youtubevideos.map((singleVideo)=>{
    //         let vidId=singleVideo.id.videoId;
    //         let vidLink=`https://www.youtube.com/watch?v=${vidId}`;
        
    //     let vidwrap=(
    //     <div>{vidLink}
    //     <img src={singleVideo.snippet.thumbnails.default.url}></img>;
    //     </div>);
        
    //     return vidwrap;
    //     }
        
    //     )}

    // </div>

    <div className="whole-section container">
    <div className="row">
        <div className="text-center col-12 h1 font-weight-bold pt-5 pb-3">
            Latest videos
        </div>
        <div className="row vids  ">
            <div className="row">
        <div className="singleVideoWrapper col-4  ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img className=''src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
            
               <discription className=" discription  "> 
               It's time for our final report. Check in with Serenity Caldwell for a recap of the last day of Apple's WWDC22. Catch you next year, ...</discription> 
            
        </div>

        <div className="singleVideoWrapper col-4  ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
        </div>

        <div className="singleVideoWrapper ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
        </div>


        <div className="singleVideoWrapper ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default YoutubeBeforeAPI