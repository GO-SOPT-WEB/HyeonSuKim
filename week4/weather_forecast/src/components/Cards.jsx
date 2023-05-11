import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WEATHER_TYPE } from "../assets/weather";
import { St } from "./Card";

export default function Cards() {
  const { cityName } = useParams();
  const [data, setData] = useState();

  const getCards = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric
      `
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.list);        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCards();
  }, [cityName]);


  const getWeatherImg = (description) => {
    const weather = WEATHER_TYPE.find((item) => item.description === description);
    return weather?.imgURL;
  };
  return (
    <St.CardContainer>
      {data
        ?.filter((item, index) => index % 8 === 0)
        .map(({id, dt_txt, weather, main, clouds}) => {
          return (
            <St.Card key={id}>
              <div>{dt_txt.slice(5, 10)}</div>
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
                  <span>{clouds?.all}%</span>
                </div>
              </main>
            </St.Card>
          );
        })}
    </St.CardContainer>
  );
}
