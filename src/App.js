import "./App.css";
import Card from "../src/Component/Card";
// import "./JSTests/classJS";

// import A from "../src/JSTests/A";
// import B from "../src/JSTests/B";
// import D from '../src/JSTests/D'
import  Counter from '../src/JSTests/Counter'

function App() {
  const card1 = {
    imgUrl: "https://onex.am/img/svg/step1.svg",
    imgAlt: "World Countries",
    text: "Card1 Description",
  };

  const card2 = {
    imgUrl: "https://onex.am/img/svg/step2.svg",
    imgAlt: "Shoping pic",
    text: "Card2 Description",
  };

  const card3 = {
    imgUrl: "https://onex.am/img/svg/step2.svg",
    imgAlt: "Smart Delivery",
    text: "Card3 Description",
  };

  return (
    <div className="App">
      {/* <div className="card_wrapper">
       <Card img={card1.imgUrl} imgAlt={card1.imgAlt} text={card1.text}/>
       <Card img={card2.imgUrl} imgAlt={card2.imgAlt} text={card2.text}/>
       <Card img={card3.imgUrl} imgAlt={card3.imgAlt} text={card3.text} active={true}/>
      </div>     */}

      {/* <A />
      <B className="BChild">
        <h1>B Children</h1>
        <span>I am a child</span>
      </B>
      <D name="name" username="username"/> */}

      {/* <Counter counter={10}/> */}
      <Counter counter={10}/>
    </div>
  );
}

export default App;
