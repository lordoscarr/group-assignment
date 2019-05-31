import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Weather from "./components/Weather";
import AnimatedBackground from "./components/AnimatedBackground";

const API_KEY = "c9f2fcc97c2431dabd58531b5f586b59";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    image: 'GIFs/sun.gif',
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && data.weather[0]) {
      let img = 'GIFs/sun.gif';
      if(data.weather[0].description.includes('cloud')){
        img = 'GIFs/clouds.gif';
      }else if(data.weather[0].description.includes('rain')){
        img = 'GIFs/rain.gif';
      }else if(data.weather[0].description.includes('storm')){
        img = 'GIFs/storm.gif';
      }else if(data.weather[0].description.includes('snow')){
        img = 'GIFs/snow.gif';
      }
      this.setState({
        temperature: data.main.temp + " °C",
        city: data.name,
        humidity: data.main.humidity + " %",
        description: data.weather[0].description,
        pressure: data.main.pressure + " hPa",
        wind: data.wind.speed + " m/s",
        image: img,
        error: undefined
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        wind: undefined,
        error: "Whoops! Looks like we couldn't find weather for this location. Try again."
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <AnimatedBackground image={this.state.image} /> 
        <img className="logo-img" src="GIFs/wallpaper1.gif" alt="background weather" />
        <header> <h1>Weather.io</h1> </header>
        <div className="searchWeatherContainer">
          <Form getWeather={this.getWeather} />
        </div>

        <div className="weatherDiv">
          <div className="weatherWrapper">
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              description={this.state.description}
              pressure={this.state.pressure}
              wind={this.state.wind}
              error={this.state.error} />
          </div>
        </div>

      </div>
    );
  }
};

export default App;
