import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import Title from '../Title/Title';
//import Favorite from './Favorite';




class Movies extends Component {

    state ={
        movies:[]
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY1}&language=en-US&page=1`)
             .then(response =>{
                console.log(response);
            this.setState({ movies: response.data.results })
             })
    }
    render(){

        let mappedMovies = this.state.movies.map( (element, i) => {
            return <Movie key={i}  movieProp={element} />
       })
            console.log(this.state.movies)
        return(
            <div>
                 <div className="App">
       
                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand"> CINEFLIX </a>

                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-red my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </nav>

                </div>
            {/* <h1>MOVIES LIST</h1> */}
            <Title />
            <span>{mappedMovies}</span>
            
            </div>
        )
    }
}

export default Movies;