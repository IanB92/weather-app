import "./styles.css";
import Weather from "./weather";
import React, { useState, useEffect } from "react";
import Info from "./info";

export default function App() {
  const [weatherData, setWeatherData] = useState("");
  const [zipCode, setZipCode] = useState("");

  //componentDidMount - runs once when componet is mounted
  useEffect(() => {
    const API = "e610368ebd2dbe8ad90e51ef65f9b243";

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${API}`;

    const makeApiCall = () => {
      fetch(weatherUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setWeatherData(data);
        });
    };
    makeApiCall();
  }, [zipCode]);

  const handleSubmit = (zip) => {
    console.log("App - handleSubmit - zip", zip);
    setZipCode(zip);
  }
  return (
    <div className="App">
      <h1>weather app</h1>
      <Info data={weatherData} />
      <Weather handleSubmit={handleSubmit} />
    </div>
  );
}
