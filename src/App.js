import logo from "./logo.svg";
import "./App.css";
import Name from '../src/Component/Name';
import Surname from '../src/Component/Surname';
import Age from '../src/Component/Age'

function App() {
  return (
    <div className="App">
      <Name />
      <Surname />
      <Age />
    </div>
  );
}



export default App;
