import React from "react";
import PusheenList from "../../PusheenList";

class Score extends React.Component {
    state = {

        PusheenList,
        score: 0,
    };


  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
  
    this.setState({ count: this.state.score + 1 });
  };


 render(){
     return(
        <div className ="card scorecard">
   
        <div className="content">
         
          <p>
         
          </p> 
      
          
          </div>
        </div>

     );
 }
}
export default Score;