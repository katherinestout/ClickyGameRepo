import React from "react";

const PusheenCard = props =>(
  <div className ="card">
  <div className = "img-container">
  <img alt={props.name} src ={props.src} />
  </div>
  <div className="content">
   
    <p>
     Pusheenz
    </p> {props.name}
    
    </div>
  </div>
);

export default PusheenCard;
