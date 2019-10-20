import React from 'react'
const WeatherForm = props => {
  return (
    <form onSubmit={props.searchWeather}>
      <input type="text" name="city" placeholder="Enter your City" />
      <input type="text" name="country" placeholder="Enter your Country" />
      <button type="submit">Search</button>
    </form>
  )
}

export default WeatherForm
