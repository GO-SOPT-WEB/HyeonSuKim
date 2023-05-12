import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WEATHER_TYPE } from "../assets/weather";
import styled from "styled-components";
import theme from "../styles/theme";
import useGetCard from "../hooks/useGetCard";
import { pulseAnimation } from "../assets/animation";

export default function Card() {
  const { cityName } = useParams();
  const { data, isLoading, isError } = useGetCard({ cityName });
  const { weather, main, clouds } = data || {};

  const getWeatherImg = (description) => {
    const weather = WEATHER_TYPE.find(
      (item) => item.description === description
    );
    return weather?.imgURL;
  };

  return (
    <St.CardContainer>
      {isLoading ? (
        <St.SkeletonCard></St.SkeletonCard>
      ) : isError ? (
        <>Not Found</>
      ) : (
        <St.Card>
          <div>{cityName}</div>
          <img
            src={getWeatherImg(weather?.[0].description)}
            alt="날씨 이미지"
          />
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
              <span>{clouds?.all}%</span>
            </div>
          </main>
        </St.Card>
      )}
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
  SkeletonCard: styled.div`
    width: 29.6rem;
    height: 58.3rem;
    margin: 5rem 2rem;

    background-color: #94a3b8;
    border-radius: 2rem;
    animation: ${pulseAnimation} 1s infinite;
  `,
  
  
};
