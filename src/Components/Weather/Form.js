import React, {Component} from 'react';



export default class Form extends Component{
    constructor(props){
        super(props);
        
        this.state={
            city:''
                       
    }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.getWeather(this.state.city);
    }
   
    render(){
        return ( <form onSubmit={this.handleSubmit}>
                <input  onChange={(e)=> this.setState({city:e.target.value})}
                 type='text' placeholder='City' ref="city" required/>
               
               
                <input type='submit' value='Find'/>
            </form>

        );
    }
}