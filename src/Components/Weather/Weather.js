import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'


export default class Weather extends Component {
    constructor(props){
        super(props);

        this.state={
            temp: '',
            description: ''
           
          }
          this.getWeather=this.getWeather.bind(this);
      }
      
      getWeather(city){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY2}&units=metric`)
             .then(res =>{
               console.log(res.data);
             this.setState({
              temp:res.data.main.temp,
              description: res.data.weather[0].description
             })
      
        })
      }
      
      
      
        render() {
          return (
            <div className='body'>
             <div className="col-md float-right">
              <div className="card">
                  <div className="card-body bg-success">
                <h2>Weather Tracker</h2>
                <Form getWeather={this.getWeather}/>
                <p>TEMPERATURE: {this.state.temp} Degrees</p>
                <p>DESC: {this.state.description}</p>
                </div>
                </div>

                </div>

            </div>
          );
        }
      }
      
      
      