import React, { Component } from "react";
import "./App.css";
// import Card from "../src/Component/Card";
// import "./JSTests/classJS";

// import A from "../src/JSTests/A";
// import B from "../src/JSTests/B";
// import D from '../src/JSTests/D'
import Counter from "../src/JSTests/Counter";
// import './JSTests/example'

import ToDo from '../src/Component/ToDo/ToDo'

class App extends Component {
  state = {
    login: false,
  };

  toggleLogin = () => {
    this.setState({
      login: !this.state.login,
    });
  };
  render() {


    //data

    // const cards = [
    //   {
    //     imgUrl: "https://onex.am/img/svg/step1.svg",
    //     imgAlt: "World Countries",
    //     text: "Card1 Description",
    //   },
    //   {
    //     imgUrl: "https://onex.am/img/svg/step2.svg",
    //     imgAlt: "Shoping pic",
    //     text: "Card2 Description",
    //   },
    //   {
    //     imgUrl: "https://onex.am/img/svg/step2.svg",
    //     imgAlt: "Smart Delivery",
    //     text: "Card3 Description",
    //   },
    // ];

    // const { login } = this.state;
    // const element = <p>Element P</p>;
    // const elements = cards.map((card,index) => {
    //   return(
    //     <Card
    //     key={index}
    //     img={
    //       card.imgUrl
    //     }
    //     text={card.text}
    //     imgAlt={card.imgAlt}
    //   />
    //   )
    // })
      
      
    return (
      <div className="App">
      <ToDo />
        {/* // {element}
        // <div className="card_wrapper">{login && elements}</div> */}

        {/* {login && (
          <Card
            img={
              "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
            }
            text="Test"
            imgAlt="pic"
          />
        )} */}
        {/* // <div>
        //   <button onClick={this.toggleLogin}>
        //     {login ? "Logout" : "Login"}
        //   </button>
        // </div> */}
      </div>
    );
  }
}

export default App;
