import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
  render() {
      return (
        <div> 
            {this.props.children}
        </div>
     )
   }
}

export default Main
