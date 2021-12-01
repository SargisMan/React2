import React, { Component } from "react";
import "./App.css";
// import A from './Test/A'
import ToDo from '../src/Component/ToDo/ToDo';
// import image from './assets/pics/nature1.jpg'
import Grid from './Test/Grid/Grid'

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
        {/* <Grid /> */}
      <ToDo test="true"/>
      {/* <img src={image} alt=""></img> */}
      {/* <A /> */}
      </div>
    );
  }
}

export default App;
