import React from 'react';

const WeatherData = props => {
  return (
    // {
    //   if(data & !!data) {
    <div className="weather-data">
      {/* And Operator >> if condition true >> do what after && */}
      {props.data.temperature && (
        <p>
          <label>temperature: </label>
          {props.data.temperature}
        </p>
      )}

      {props.data.city && (
        <p>
          <label>city: </label>
          {props.data.city}
        </p>
      )}

      {props.data.country && (
        <p>
          <label>country: </label>
          {props.data.country}
        </p>
      )}
      {props.data.humidity && (
        <p>
          <label>humidity: </label>
          {props.data.humidity}
        </p>
      )}
      {props.data.description && (
        <p>
          <label>description: </label>
          {props.data.description}
        </p>
      )}
      {props.data.error && (
        <p>
          <label>error: </label>
          {props.data.error}
        </p>
      )}
    </div>
    // }
    //   }
  );
};

export default WeatherData;
