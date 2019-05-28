import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "c9f2fcc97c2431dabd58531b5f586b59";

class App extends Component {
  state = {
  temperature: undefined,
  city: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}

getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  if (city) {
    this.setState({
      temperature: data.main.temp + "°C",
      city: data.name,
      humidity: data.main.humidity + "%",
      description: data.weather[0].description,
      error: ""
    });
  } else {
    this.setState({
      error: "INSERT A CITY!"
    });
  }
}

render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="weatherTitle">
                <Titles />
              </div>
              <div className="searchWeatherContainer">
                <Form getWeather={this.getWeather} />
                <div className="weatherDiv">
                <Weather
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  city={this.state.city}
                  description={this.state.description}
                  error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default App;
