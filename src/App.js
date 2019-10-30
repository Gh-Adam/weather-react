import React, { Component } from "react";
import "./App.css";
import WeatherForm from "./components/weather-form/weather-form";
import WeatherData from "./components/weather-data/weather-data";
import Styles from "./style.module.css";

const API_KEY = "910a0bbb81f6e09433dccea83982a487";
class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    console.log("e", e);
    const city = e.target.elements.city.value.toLowerCase();
    const country = e.target.elements.country.value.toLowerCase();
    if (!city || !country) {
      this.setState = {
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data !"
      };

      return;
    }
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log("data", data);
    if (data && !!data) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
  };

  render() {
    return (
      <div className="App">
        <WeatherForm searchWeather={this.getWeather} />
        <WeatherData data={this.state} />
      </div>
    );
  }
}

export default App;
