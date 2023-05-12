import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function useGetCards(props) {
  const { cityName } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getCards = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      await new Promise((resolve) => setTimeout(() => resolve(), 500));
      const response =
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric
      `);
      setData(response.data.list);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, [cityName]);

  return { data, isLoading, isError };
}
