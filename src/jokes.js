import React,{useState } from 'react';
import ReactDOM from 'react-dom';
import './jokes.css';
//import * as admin from 'firebase-admin';
//admin.initializeApp(functions.config().firebase);//
//firebase deploy --only hosting,storage

//export const myFirstCloudFun= functions.database.ref('/users/{userId}').onWrite(async (event, context) =>{
 // const user= event.after.val()
 // const name = user.name
 // const token = user.token
 // const payload = {
       //      notification: {
        //       title: 'Hi '+ name,
        //       body: 'Welcome to our first cloud function App' ,
     //          sound : "default"
     ////        }
       //    };
  //return admin.messaging().sendToDevice(token, payload)
     //      .then(function(response){
      //         console.log("Successfully message is sent:", response);
     //      console.log(response.results[0].error);})
     //      .catch(function(error) {
     //        console.log("Error while sending message:", error);
    //     }
     //)
  
 // })

 const Jokes = (props) => {return (    <div className="App">
 <header className="App-header">
  
 </header></div>
 
 )}
 ReactDOM.render(<Jokes />, document.getElementById('root'));
 export default Jokes;