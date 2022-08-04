import React,{useEffect, useState} from 'react'

function Youtubenew() {
const[youtubevideos,setyoutubevideos]=useState([]);
useEffect(()=>{
  fetch("ytlocal.json")
  .then((response)=>response.json())
  .then((data)=>{
    const youtubedata=data;
    setyoutubevideos(youtubedata)
  })
},[])






  return (
    <div className="whole-section container">
    <div className="row">
        <div className="text-center col-12 h1 font-weight-bold pt-5 pb-3">
            Latest videos
        </div>
        <div className=" vids  ">
            <div className="row">
        <div className="singleVideoWrapper col-4  ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img className=''src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
            
               <discription className="discription  "> 
               It's time for our final report. Check in with Serenity Caldwell for a recap of the last day of Apple's WWDC22. Catch you next year, ...</discription> 
        </div>



        <div className="singleVideoWrapper col-4  ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img className=''src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
            
               <discription className=" discription  "> 
               It's time for our final report. Check in with Serenity Caldwell for a recap of the last day of Apple's WWDC22. Catch you next year, ...</discription> 
            

            
        </div>




        <div className="singleVideoWrapper col-4  ">
            <a className="" href="https://www.youtube.com/watch?v=PMCDIIxBiZA">{<img className=''src="https://i.ytimg.com/vi/PMCDIIxBiZA/hqdefault.jpg"
            ></img>}<div className="black font-weight-bold">WWDC22 Day 5: Power down | Apple</div>
            </a>
            
               <discription className=" discription  "> 
               It's time for our final report. Check in with Serenity Caldwell for a recap of the last day of Apple's WWDC22. Catch you next year, ...</discription> 
            

            
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Youtubenew