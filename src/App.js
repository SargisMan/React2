import React, { Component } from "react";
import "./App.css";
// import A from './Test/A'
import ToDo from '../src/Component/ToDo/ToDo';
// import LifeCycle from "./Demo/Lifecycle";

class App extends Component {
  state = {
    lifeCycle: true,
  };

  render() {
    return (
      <div className="App">
        <ToDo test="true"/>
        {/* {this.state.lifeCycle && <LifeCycle />} */}
      </div>
    );
  }
}

export default App;
