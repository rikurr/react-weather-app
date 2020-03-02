import React from "react";
import styled from "styled-components";

const WeatherCardStyles = styled.div`
  margin-top: 4.8rem;
  margin-bottom: 6rem;
  width: 60%;
  height: 32rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px #9e9e9e;
`;

const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WeatherDate = styled.div`
`;

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();

const WeatherCard = ({
  city,
  country,
  celsius,
  temp_max,
  temp_min,
  description,
  weatherIcon
}) => {
  return (
    <WeatherCardStyles>
      <WeatherCardContainer>
        <WeatherDate>
          <h1>
            {month}月{day}日
          </h1>
        </WeatherDate>
        <h1>
          {city}, {country}
        </h1>
        <h2>平均気温{celsius}度</h2>
        <h2>
          最高{temp_max}度, 最低{temp_min}度
        </h2>
        <h2>天気{description}</h2>
      </WeatherCardContainer>
    </WeatherCardStyles>
  );
};

export default WeatherCard;
