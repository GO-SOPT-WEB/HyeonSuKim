import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Card() {
  const { cityName } = useParams();

  const getCard = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.code === 200) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCard();
  }, []);
  return <div>card</div>;
}
