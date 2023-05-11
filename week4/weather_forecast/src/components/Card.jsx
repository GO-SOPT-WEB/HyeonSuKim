import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WEATHER_TYPE } from "../assets/weather";
import styled from "styled-components";
import theme from "../styles/theme";

export default function Card() {
  const [data, setData] = useState();
  const { cityName } = useParams();

  const getCard = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCard();
  }, [cityName]);
  const getWeatherImg = (description) => {
    const weather = WEATHER_TYPE.find(
      (item) => item.description === description
    );
    return weather?.imgURL;
  };

  const { weather, main, clouds } = data || {};

  return (
    <St.CardContainer>
      <St.Card>
        <div>{cityName}</div>
        <img src={getWeatherImg(weather?.[0].description)} alt="날씨 이미지" />
        <main>
          <div>
            <span>온도</span>
            <span>{main?.temp}</span>
          </div>
          <div>
            <span>체감 온도</span>
            <span>{main?.feels_like}</span>
          </div>
          <div>
            <span>최저/최고</span>
            <span>
              {main?.temp_min}/{main?.temp_max}
            </span>
          </div>
          <div>
            <span>구름</span>
            <span>{clouds?.all}</span>
          </div>
        </main>
      </St.Card>
    </St.CardContainer>
  );
}

export const St = {
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.orange};
    height: 100vh;
  `,
  Card: styled.div`
    text-align: center;
    margin: 5rem 2rem;
    padding: 5rem 3rem;
    background-color: ${theme.colors.purple};
    height: fit-content;
    border-radius: 2rem;
    & > div {
      font-size: 3rem;
    }
    & > main {
      & > div {
        display: flex;
        justify-content: space-between;
        font-size: 3rem;
        margin: 2rem 0;
      }
    }
    & > img {
      border-radius: 2rem;
      margin: 2rem 0;
    }
  `,
};
