import React,{useState } from 'react';
import ReactDOM from 'react-dom';
import './jokes.css';
import { NavLink } from "react-router-dom";



  const Jokes = props => {
 
      const { username, city, phone, subCat2 } =
        (props.location && props.location.state) || {};
      const [Joke, setJoke] = React.useState("");
    const url = new URL("https://sv443.net/jokeapi/v2/joke/"+subCat2);
    
    var search_params = url.searchParams;
    
    // add "single" parameter
    search_params.set('type','single');
    
    url.search = search_params.toString();
    
    var new_url = url.toString();
    console.log(new_url);
      const fetchSingle = () => {
        // Fetching data from the API
        fetch(new_url)
          .then((res) => res.json())
          .then((data) => setJoke(data.joke));
      };
      return (
        <div>  
          <div className="form-details">
            <div>
              <button href="" onClick={fetchSingle}>
                joke
              </button>
              <p>{Joke}</p>
              <strong>Username:</strong> {username}
            </div>
            <div>
              <strong>Email:</strong> {subCat2}
            </div>
            <div>
              <strong>City:</strong> {city}
            </div>
            <div>
              <strong>Phone:</strong> {phone}
            </div>
          </div>
        </div>
      );
    };
    
    
  ReactDOM.render(<Jokes />, document.getElementById('root'));
export default Jokes;