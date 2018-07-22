import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Home from "./components/pages/Home";
import PusheenList from "./PusheenList.json";
import PusheenCard from "./components/PusheenCard/PusheenCard";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/Navbar/Navbar"
//import PusheenImages from "../public/PusheenImages"; 


class App extends React.Component{
  //sets this.state.pusheenlist to the pusheenlist json array 
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    
    console.log("yahoo");
  };

  state = {
    PusheenList,
   // score: 0,
  };



//this.onClick = this.handleClick.bind(this);

//gave the name a key, must not be identical when mapping over a list

//get all of the pusheens using map
render(){
  return(
    <Wrapper>

      <NavBar/>
  

    {this.state.PusheenList.map(PusheenList => (

      <div onClick = {this.handleClick}>
        <PusheenCard 
        name key= {PusheenList.name}
        image = {PusheenList.image} 
        //onClick= {this.handleClick}
        />
        </div>
    ))}

    
    
    </Wrapper>
  );
};
}

export default App;