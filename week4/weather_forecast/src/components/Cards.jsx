import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WEATHER_TYPE } from "../assets/weather";
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
        console.log(data);
        setData(data.list);
        if (data.code === 200) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCards();
  }, []);

  const getWeatherImg = (description) => {
    const weather = WEATHER_TYPE.find((item) => item.description === description);
    return weather?.imgURL;
  };
  return (
    <div>
      {data
        ?.filter((item, index) => index % 8 === 0)
        .map((item) => {
          return (
            <div key={item.id}>
              <div>{item.dt_txt.slice(5, 10)}</div>
              <img src={getWeatherImg(item?.weather[0]?.description)} alt="날씨 이미지" />
              <main>
                <div>
                  <span>온도</span>
                  <span>{item?.main?.temp}</span>
                </div>
                <div>
                  <span>체감 온도</span>
                  <span>{item?.main?.feels_like}</span>
                </div>
                <div>
                  <span>최저/최고</span>
                  <span>
                    {item?.main?.temp_min}/{item?.main?.temp_max}
                  </span>
                </div>
                <div>
                  <span>구름</span>
                  <span>{item?.clouds?.all}</span>
                </div>
              </main>
            </div>
          );
        })}
    </div>
  );
}
