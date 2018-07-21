import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Home from "./components/pages/Home";
import PusheenList from "PusheenList";
import PusheenCard from "./components/PusheenCard/PusheenCard";

class App extends Component{
  //sets this.state.pusheenlist to the pusheenlist json array 
  state = {
    PusheenList
  };

//get all of the pusheens using map
render(){
  return(
    <Wrapper>
    {this.state.PusheenList.map(Pusheen => (
        
        <PusheenCard
        name = {PusheenList.name}
        src = {PusheenList.src}
        />


    ))}
    </Wrapper>
  );
}
};

export default App;
