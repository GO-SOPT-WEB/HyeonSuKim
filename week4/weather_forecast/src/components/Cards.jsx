import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Cards() {
    const { cityName } = useParams();

  const getCards = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric
      `
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
    getCards();
  }, []);
  return <div>cards</div>;
}
