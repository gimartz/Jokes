import './app.scss';
import'./jokes.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyForm from './main';import Jokes from './jokes';
import React,{useState } from 'react';
import LinkButton from './link'
function App() {
 
    const [state, setState] = useState({
     budget:'', joke : ''
    });
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  return (
    <div className="App">
      <header className="App-header">
       <head>Jokescentral</head>
      </header>
      <div className="login-box">
  <h2><i>Hello There!</i></h2>
  <form>
  <div class="section over-hide z-bigger">
		<input class="checkbox" type="checkbox" name="general" id="general"/>
		<label class="for-checkbox" for="general"></label>
		<div class="background-color"></div>
		<div class="section over-hide z-bigger">
			<div class="container pb-5">
				<div class="row justify-content-center pb-5">
					
					<div class="col-12 pt-1">
						<p class="mb-4 pb-2">Click to switch page theme</p>
					</div>
					<div class="col-xl-10 pb-5">
          <input class="checkbox-budget" type="radio" name="budget" onChange={handleInputChange} id="budget-1" value="Any" />
						<label class="for-checkbox-budget" for="budget-1" >
							<span data-hover="Any">Any</span>
						</label>
                        <input class="checkbox-budget" type="radio" name="budget" id="budget-2" onChange={handleInputChange} value="Programming" />
						<label class="for-checkbox-budget" for="budget-2">							
							<span data-hover="Programming">Programming</span>
						</label>
                        <input class="checkbox-budget" type="radio" name="budget" id="budget-3"onChange={handleInputChange} value="Miscellaneous" />
						<label class="for-checkbox-budget" for="budget-3">							
							<span data-hover="Misc">Misc</span>
						</label>
                        <input class="checkbox-budget" type="radio" name="budget" id="budget-4" onChange={handleInputChange} value="Dark" />
						<label class="for-checkbox-budget" for="budget-4">							
							<span data-hover="Dark">Dark</span>
						</label>
                        <input class="checkbox-budget" type="radio" name="budget" id="budget-5" onChange={handleInputChange} value="Christmas" />
						<label class="for-checkbox-budget" for="budget-5">							
							<span data-hover="christmas">Christmas</span>
						</label>
   <input class="checkbox-budget" type="radio" name="budget" id="budget-6" onChange={handleInputChange} value="Pun" />
						<label class="for-checkbox-budget" for="budget-6">							
							<span data-hover="Pun">Pun</span>
						</label>
           
            <div class="col-12 pb-5 login-box">    <span>&nbsp;</span>
      <span>&nbsp;</span>	<LinkButton     to={{
            pathname: "main",role:'button',
            state
          }}
          onClick={(event) => {
            console.log('custom event here!', event)}}
          
          >Push My Buttons!</LinkButton>
      <span>&nbsp;</span>
      <span>&nbsp;</span>	</div>    <footer> <div class="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2021 Gimartz All rights reserved.</p>
      </div>
    </div></footer>
					</div>
				
				
				</div>
			</div>	
		</div>
	</div>
		

  </form>
  </div>
	<a href="https://gimartz.com" class="link-to-page" ><img src="https://assets.codepen.io/1462889/fcy.png" alt=""/></a>
 
 

    </div> 
  );
}

export default App;
