import React, { Component } from "react";
import "./App.css";
// import A from './Test/A'
import ToDo from './/Component/pages/ToDo/ToDo';
// import LifeCycle from "./Demo/Lifecycle";
// import Demo from './Demo/Demo';
// import Row from './Demo/Row';
import Navbar from "./Component/NavBar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom"
//pages
import Contact from './Component/pages/Contact/Contact';
import About from './Component/pages/About/about';
import NotFound from "./Component/pages/NotFound/NotFound";
import SingleTask from "./Component/pages/SingleTask/SingleTask";



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

        <Switch>
        <Route path="/" component={ToDo} exact/> />
        <Route path="/contact" component={Contact} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/task/:id" component={SingleTask} exact/>
        {/* <Route path="/*" componen={NotFound} exact/> */}
        <Route path="/404" component={NotFound} exact/>
        <Redirect to="/"/>
        </Switch>
      
        {/* <Routes>
        <Route path="/" element={<ToDo/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/task/:id" element={<SingleTask props={{userName:"Bio", from:''}}/>} exact/>
        <Route path="/*" element={<NotFound/>} exact/> */}
        {/* <Route path="/404" element={<NotFound/>} exact/> */}
        {/* <Redirect to="/"/> */}
        {/* </Routes> */}
      

{/* example2 */}
        {/* <Switch>
          <Route path="/">
            <ToDo />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/task/:id" exact>
            <SingleTask />
          </Route>
        </Switch> */}


{/* example3 */}
        {/* <Switch>
          <Route path="/"  render={()=><ToDo/>} extend/>
          <Route path="/contact"  render={()=><Contact/>} extend/>
          <Route path="/about"  render={()=>About} extend/>
          <Route path="/task/:id"  render={()=>About} extend/>
        </Switch> */}

        
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
