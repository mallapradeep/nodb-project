import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './Components/Movies/Movies';
import Favorite from './Favorite';
import Weather from './Components/Weather/Weather'



class App extends Component {
  render() {
    return (
      <div className="App">
      

      <span className="movie-array">
           <Favorite />
           <Weather />
            <Movies />
      </span>
       
      
      </div> 
     
    );
  }
}

export default App;
