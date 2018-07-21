import React from "react";
import "./PusheenCss.css";

//import PusheenList from "../../../../theclickygame/src/PusheenList.json";

const PusheenCard = props =>(
  <div className ="card">
  <div className = "img-container">
  <img alt={props.name} src ={props.image} />
  </div>
  <div className="content">
   
    <p>
    EACH PUSHEEN
    </p> 
    {props.image}
    
    </div>
  </div>
);

export default PusheenCard;
