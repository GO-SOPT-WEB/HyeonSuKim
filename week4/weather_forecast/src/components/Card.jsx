import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WEATHER_TYPE } from "../assets/weather";

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
        console.log(data.weather[0].description);
        setData(data);
        if (data.code === 200) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCard();
  }, []);
  const getWeatherImg = (description) => {
    const weather = WEATHER_TYPE.find(
      (item) => item.description === description
    );
    return weather?.imgURL;
  };
  return (
    <div>
      <div>
        <div>{cityName}</div>
        <img
          src={getWeatherImg(data?.weather[0]?.description)}
          alt="날씨 이미지"
        />
        <main>
          <div>
            <span>온도</span>
            <span>{data?.main.temp}</span>
          </div>
          <div>
            <span>체감 온도</span>
            <span>{data?.main.feels_like}</span>
          </div>
          <div>
            <span>최저/최고</span>
            <span>
              {data?.main.temp_min}/{data?.main.temp_max}
            </span>
          </div>
          <div>
            <span>구름</span>
            <span>{data?.clouds.all}</span>
          </div>
        </main>
      </div>
    </div>
  );
}
