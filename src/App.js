import React, { Component } from "react";
import "./App.css";
// import A from './Test/A'
import ToDo from '../src/Component/ToDo/ToDo';
// import LifeCycle from "./Demo/Lifecycle";
import Demo from './Demo/Demo'

class App extends Component {
  state = {
    lifeCycle: true,
  };

  render() {
    return (
      <div className="App">
        <Demo />
        <ToDo test="true"/>
        {/* <LifeCycle /> */}
        {/* {this.state.lifeCycle && <LifeCycle />} */}
      </div>
    );
  }
}

export default App;
