import React from "react";
import styles from "../../style.module.css";
const WeatherForm = props => {
  return (
    <form onSubmit={props.searchWeather} className={styles.weatherForm}>
      <input type="text" name="city" placeholder="Enter your City" />
      <input type="text" name="country" placeholder="Enter your Country" />
      <button type="submit" className={styles.submitBtn}>
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
