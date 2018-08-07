import React, { Component } from 'react'
import axios from 'axios';


export default class Favorite extends Component {
  constructor(){
    super();
    
    this.state = {
        movies:[],
        input: ''
    }
    
    
  }

    componentDidMount(){
        axios.get('/api/movies')
          .then( response => {
            console.log( response.data )
            this.setState({ movies: response.data })
          })
        }

      
      
      handleChange(value){
        this.setState({
          input: value
        })
      }

      handleAdd(){
        axios.post('/api/movies', {movie: this.state.input})
              .then( response => {
               console.log(response)
           this.setState({ movies: response.data ,
                            input: ''   })
                
          })

      }
      handleDelete(){
        axios.delete('/api/movies/id', {movie: this.state.input})
              .then( response => {
               console.log(response)
           this.setState({ movies: response.data })
          })

      }
         

      
  render() {
    let mappedMovies = this.state.movies.map( ( movie, i ) => {
      console.log(mappedMovies)
      return (
        <span key={i}>{movie}</span>
         
      )
    } 
     
    )
    return (
      <div className="col-md-6 float-right">
        <div className="card">
          <div className="card-body bg-success">
              <h2>Watch List</h2>
                   {mappedMovies}
              <br/>
              <input type="text" placeholder="Enter your favorite" 
                  onChange={(e)=>this.handleChange(e.target.value)}
                  value={this.state.input}/>
                <button className="Button1" onClick={()=>this.handleAdd()}>ADD</button>
                <button className="Button1"onClick={()=>this.handleDelete()}>Delete</button>

          </div>
        </div>
      </div>
        
    )
  }
}
