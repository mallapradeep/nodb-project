import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button';

export default class Comments extends Component {
    constructor(){
        super();

            this.state = {
                input: '',
                list: []
            }

        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }
        handleInputChange( value ) {
            this.setState({ input: value });
        }

        handleAddComment() {
            // axios.post('/api/movies', {comments: this.state.input })
            // .then( response => this.setState({ 
            //     list: response.data
            this.setState ({  list: [...this.state.list, this.state.input ],
                input: '',
                editInput: ''
            })
        }

        handleDeleteComment(i) {
            let newList = this.state.list.slice();
                newList.splice(i,1)
                // newList[i] = 
            this.setState({
                list: newList ,
                input: ''

            })
        }
        handleEditComment(i) {
            let newList = this.state.list.slice();
                newList[i] = this.state.editInput
            this.setState({
                list: newList ,
                editInput: ''

            })
        }
        handleEditChange( value, i ) {
            let newList = this.state.list.slice()
            newList[i] = value
            // console.log(i, newList[i])
            this.setState({ list: newList });
        }


  render() {
      let list = this.state.list.map( (element, i)=> {
          return (
              <div key={i}>
                  {/*  <p>  { element } </p> */}
                  
                   <input type="text" onChange= { (e)=> this.handleEditChange(e.target.value, i)} value={ this.state.list[i] }/>
                   <Button action={()=> this.handleEditComment(i) }>Edit</Button>
                   <Button action={()=> this.handleDeleteComment(i) }>Delete</Button>
              </div>
           
          )
      })
    return (
      <div>
        <input type="text" placeholder="Add Comment" 
                value={ this.state.input } 
                 onChange={ (e)=> this.handleInputChange(e.target.value) }/>

        <Button action={ this.handleAddComment }>Add</Button>
        

        { list }
      </div>
    )
  }
}
