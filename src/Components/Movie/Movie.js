import React, { Component } from 'react';
import Comments from '../Comments/Comments';


export default class Movie extends Component {

    handleClick(props){
        (this.props.movieProp.overview)
      }

    render() {
      const{ title, overview, release_date, vote_average, poster_path } = this.props.movieProp;

     
    return (
      <span className="float-left">
        <div><h5>{title}</h5></div>
         <img src ={`http://image.tmdb.org/t/p/w185//${poster_path}`}/>
         <div><button onClick= {()=>this.handleClick() }>Details</button></div>
         <div><h4>Release Date:</h4>{release_date}</div>
         <div><h4>Rating</h4>{vote_average}</div>
        
        
           <Comments/>
           <hr /> 
      </span>
    )
  }
}
