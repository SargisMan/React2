import React, { Component } from "react";
import "./App.css";
import A from './Test/A'
// import ToDo from '../src/Component/ToDo/ToDo'

class App extends Component {
  state = {
    counter:0
  };

plusCounter=()=>{
  this.setState({
    counter:this.state.counter+1
  })
}
  render() {  
    return (
      <div className="App">
      {/* <ToDo /> */}
      <A />
      </div>
    );
  }
}

export default App;
