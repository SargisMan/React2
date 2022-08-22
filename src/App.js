import React, { Component } from "react";
import "./App.css";
// import A from './Test/A'
import ToDo from '../src/Component/ToDo/ToDo';
// import LifeCycle from "./Demo/Lifecycle";
// import Demo from './Demo/Demo';
// import Row from './Demo/Row'

class App extends Component {
  state = {
    lifeCycle: true,
  };

  render() {
    // const style={
    //   width:"50px",
    //   height:"50px",
    //   backgroundColor:"red"
    // }
    return (
      <div className="App">
        {/* <Demo /> */}
        <ToDo test="true"/>
        {/* <LifeCycle /> */}
        {/* {this.state.lifeCycle && <LifeCycle />} */}
        {/* <Row>
          <div style={style}></div>
          <div style={style}></div>
        </Row>

        <Row>
          <div style={style}></div>
          <div style={style}></div>
        </Row> */}
      </div>
    );
  }
}

export default App;
