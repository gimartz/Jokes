
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MyForm from './main';import Jokes from './jokes';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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