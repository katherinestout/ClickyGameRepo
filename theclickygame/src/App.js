import React, {Component} from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Home from "./components/pages/Home";
import PusheenList from "./PusheenList.json";
import PusheenCard from "./components/PusheenCard/PusheenCard";
import Wrapper from "./components/Wrapper/Wrapper";
//import PusheenImages from "../public/PusheenImages"; 


class App extends Component{
  //sets this.state.pusheenlist to the pusheenlist json array 
  state = {
    PusheenList,
  };

//get all of the pusheens using map
render(){
  return(
    <Wrapper>
    {this.state.PusheenList.map(PusheenList => (
        
        <PusheenCard
        name key= {PusheenList.name}
        image = {PusheenList.image}
        />


    ))}
    </Wrapper>
  );
};
}

export default App;