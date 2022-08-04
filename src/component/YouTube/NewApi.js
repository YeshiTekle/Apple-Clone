import React,{useState, useEffect} from 'react'

function NewApi() {
      const [random, setrandom]=useState([]);
  useEffect(()=>{
      fetch('https://randomuser.me/api/')
      .then((response)=>response.json())
      .then((data)=>{
          const randomdata=data.results;
          setrandom(randomdata);
      });

  },[]);
  console.log(random)

  return (
      <div>
          <div>
            
               {/* {random[0]} */}
              {random?.map((singleperson,i)=>{
                  let fName=singleperson.name.first;
                  let lName=singleperson.name.last;
                  let photo=singleperson.picture.large
                  return (
                      <div key={i}>
                          
                          <h1>{fName} {lName}</h1>
                          <img src={photo}/>
                          

                      </div>
                  )
              })
              }
              

          </div>
      </div>

    // <div>
    //     <div>
    //     {randomdata?.map((singleperosn)=>{
    //         let fName=singleperosn.name;
    //         let photo=singleperosn.picture.thumbnail
    //         let user=(
    //             <div >{fName}
    //                 <div/>)}
    //             return user}

    //             </div>
                


    //             </div>
  )
}

export default NewApi