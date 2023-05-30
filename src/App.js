import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";
import { WEATHER_API_KEY, WEATHER_URL } from "./api";
import { Component, useState } from "react";
import Footer from "./components/static/footer";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [currentForecast, setcurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const currentForecastFetch = fetch(
      `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, currentForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setcurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };
  console.log(currentForecast);
  return (
    <>
    
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
