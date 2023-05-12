import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function useGetCard(props) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { cityName } = props;
  const getCard = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      await new Promise(resolve => setTimeout(() => resolve(), 500));
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

  };

  useEffect(() => {
    getCard();
  }, [cityName]);

  return { data, isLoading, isError };
}
