import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Nav from "./nav";
import WeatherCard from "./weather-card";

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const API_key = "fbfdad0fa6aa76e32c31ac274d99117f";

const App = () => {
  const [weather, setWeather] = useState({});
  const [searchQuery, setSearchQuery] = useState("Osaka");
  const [url, setUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_key}`
  );

  const { city, country, celsius, temp_max, temp_min, description } = weather;

  useEffect(() => {
    const fetchData = async () => {
      const respons = await axios(url);
      const data = await respons.data;
      console.log(data);
      setWeather({
        city: data.name,
        country: data.sys.country,
        celsius: calCelsius(data.main.temp),
        temp_max: calCelsius(data.main.temp_max),
        temp_min: calCelsius(data.main.temp_min),
        description: data.weather[0].description
      });
    };
    fetchData();
  }, [url]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log({searchQuery})
  };

  const searchClick = event => {
    event.preventDefault();
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_key}`);
    console.log({searchQuery})
  }

  const calCelsius = temp => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };
  return (
    <AppStyles>
      <Nav
        handleSearch={handleSearch}
        value={searchQuery}
        searchClick={searchClick}
      />
      <WeatherCard
        city={city}
        country={country}
        celsius={celsius}
        temp_max={temp_max}
        temp_min={temp_min}
        description={description}

      />
    </AppStyles>
  );
};

export default App;
