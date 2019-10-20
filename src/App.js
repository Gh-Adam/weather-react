import React, { Component } from 'react'
import './App.css'
import WeatherForm from './components/weather-form/weather-form'
import WeatherData from './components/weather-data/weather-data'
class App extends Component {
  getWeather = async e => {
    console.log('errrppppr')
    e.preventDefault()
    console.log('e', e)
    const api = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44',
    )
    const data = api.json()
    console.log('data', data)
  }

  render() {
    return (
      <div className="App">
        <WeatherForm searchWeather={this.getWeather} />
        <WeatherData />
      </div>
    )
  }
}

export default App
