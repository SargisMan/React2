import React, { Component } from "react";
import "./App.css";
// import A from './Test/A'
import ToDo from './/Component/pages/ToDo/ToDo';
// import LifeCycle from "./Demo/Lifecycle";
// import Demo from './Demo/Demo';
// import Row from './Demo/Row';
import Navbar from "./Component/NavBar/Navbar";
import { Routes, Route, Redirect } from "react-router-dom"
//pages
import Contact from './Component/pages/Contact/Contact';
import About from './Component/pages/About/about'

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
        <Navbar />

        {/* example1 */}
        <Routes>
        <Route path="/" element={<ToDo/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        {/* <Redirect to="/"/> */}
        </Routes>

{/* example2 */}
        {/* <Routes>
          <Route path="/">
            <ToDo />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Routes> */}


{/* example3 */}
        {/* <Routes>
          <Route path=""  render={()=><ToDo/>}/>
          <Route path=""  render={()=><Contact/>}/>
          <Route path=""  render={()=>About} />
          <Route/>
        </Routes> */}

        
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
