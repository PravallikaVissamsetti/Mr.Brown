import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Items = () => {
  const [cakes,setCakes]=useState([]);
  useEffect(() => {
    fetch("https://jsonblob.com/api/485d8d47-c51f-11ea-b1d4-63e112402fa4")
      .then((response) => response.json())
      .then((json) => { 
        const {cakes}=json;
        setCakes([...cakes]);
      });
  }, []);
  return (
    <>
      <div className="" style={{backgroundColor:"#fff"}}>
        <h1>Some of our Items</h1>
      <div className="row">
        {cakes.map((data,index) => (
          <>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div class=" b card shadow m-4" style={{ width: "18rem" }}>
              <marquee behavior="slide" direction="down"> <img
                  class="card-img-top"
                  width="210"
                  height="250"
                  src={data.img}
                  alt="Card image cap"
                /></marquee> 
               <marquee behavior="slide" direction="up"><div class="card-body">
                  <strong class="card-title" style={{ fontSize: "15px" }}>
                    {data.name}
                  </strong>
                  <p class="card-title my-0"> Weight:{data.weight} <br/>
                  Price: {data.price}
                  </p>
                </div></marquee> 
              </div>
            </div>
          </>
        ))}
      </div>
      </div>
    </>
  );
};

export default Items;
