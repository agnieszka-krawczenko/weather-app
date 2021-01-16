import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIkey = '714066faa28362cc66e7cc0474695d1f';
class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Wystąpił błąd")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleTimeString();
        console.log(data);
        this.setState({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }))
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sprawdź pogodę w swoim mieście</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
