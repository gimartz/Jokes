import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';import MyForm from './main';import Jokes from './jokes';
import App from './App';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return(
    
    <Router>
     
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/main" component={MyForm} />
        <Route path="/Jokescentral" component={Jokes} />
      </Switch>
    
    </Router>
  )
}
ReactDOM.render(
  <React.StrictMode>

    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
