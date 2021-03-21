
import './app.scss';import'./joke.scss';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
//import Splitting from "splitting";
// 'react-jquery-plugin';import $ from 'jquery'
import React from "react";  
import Single from "./single"; 
import Random from "./random"; 
import Bon from "./Twopart";
import { Component } from 'react';

// Create a functional component 
const MyForm = (props) => {
 //Splitting();
	// Declare a state variable 
  
  const { budget} =
  (props.location  && props.location.state) || {};
  
	const [Joke, setJoke] = React.useState(""); 
 
  const fetchSingle = () => {
    const url = new URL("https://v2.jokeapi.dev/joke/"+ budget+"?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");

    var search_params = url.searchParams;

    // add "single" parameter
    search_params.set("type", "single");

    url.search = search_params.toString();

    var new_url = url.toString();
    console.log(new_url);
    // Fetching data from the API
    fetch(new_url)
    .then((resp) => resp.json())
      .then((data) =>  {
        console.log(data);
        console.log(data.setup);
        console.log(data.delivery);
        let joke = data.joke
        if(data.error===true){ setJoke(data.message)}else {
        setJoke(joke);}
      })
  };
  const fetchApi = () => { 
    // Fetching data from the API 
        fetch("https://v2.jokeapi.dev/joke/"+budget+"?blacklistFlags=nsfw,religious,political,racist,sexist,explicit") 
        .then((resp) => resp.json())
      
        .then((data) => {
          console.log(data);
          console.log(data.setup);
          console.log(data.delivery);
          let joke = data.setup + ' ' + data.delivery 
          if(data.error===true){ setJoke(data.message)}else if(data.delivery===undefined && data.setup=== undefined ){setJoke(data.joke)}else
        //setJoke(joke);
          setJoke(joke);}
        )
        .catch((err) => {
          console.log(err.message);
        });
  };
  const fetchpart = () => { 
    // Fetching data from the API 
    const url = new URL("https://v2.jokeapi.dev/joke/"+budget+"?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");

    var search_params = url.searchParams;

    // add "single" parameter
    search_params.set("type", "twopart");

    url.search = search_params.toString();

    var new_url = url.toString();
    console.log(new_url); //API
    fetch(new_url).then((resp) => resp.json()) 
        .then((data) => {
          console.log(data);
          console.log(data.setup);
          console.log(data.delivery);
          let joke = data.setup + ' ' + data.delivery
          if(data.error===true){ setJoke(data.message)}else 
          setJoke(joke);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };

 

	return ( 
		// Return the Button Component with a conditional statement 
    
    <div className="login-box"><header className="cd-header">
		<div className="header-wrapper">
			<div className="logo-wrap">
				<a href="./" className=" fon hover-target"><span></span>Go Back Home</a>
			</div>
			<div className="nav-but-wrap">
				<div class="menu-icon hover-target">
					<span className="menu-icon__line menu-icon__line-left"></span>
					<span className="menu-icon__line"></span>
					<span className="menu-icon__line menu-icon__line-right"></span>
				</div>					
			</div>					
		</div>				
	</header><div className="nav">
		<div className="nav__content">
			<ul className="nav__list">
				<li className="nav__list-item active-nav"><a href="#" className="hover-target">Home</a></li>
				<li className="nav__list-item"><a href="https://github.com/gimartz/" className="hover-target">Github Profile</a></li>
			</ul>
		</div>
	</div>
<main class="container">

<h1 className=" fon ">{budget}</h1>
			

  <h2 data-splitting className="headline fon headline--jump"> {Joke}
  <Random callApi={fetchApi} /><br></br><Bon callApi={fetchpart} /><br></br><Single callApi={fetchSingle} /> <br></br>
</h2>

  
  
<footer> <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2021 Gimartz All rights reserved.</p>
      </div>
    </div></footer>
</main>
</div>
	); 
} 



 

export default MyForm;