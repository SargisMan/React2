import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './JSTests/async';
import {BrowserRouter} from 'react-router-dom';
//Backend API Link => https://github.com/MASISKAR/react-js-beg-02-todo-api?fbclid=IwAR0QrFLqxrWmlEEolNHjXpG0jceO0zINThwopasrdww4n6AxaDrqA5Y3f4A


ReactDOM.render(
  <React.StrictMode>
    {/* <div>Demo</div> */}
   <div>
   </div>
    <BrowserRouter>
    <App />    
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
