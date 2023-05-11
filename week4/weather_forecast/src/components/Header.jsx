import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [period, setPeriod] = useState("day");
  const [cityName, setCityName] = useState("");

  const navigate = useNavigate();

  const searchBtnClick = () => {
    navigate(`/${period}/${cityName}`);
  };

  const handlePeriodChange = (e) => {
    const periodInput = e.target.value;
    setPeriod(periodInput);
    if (periodInput === "day" && cityName) {
      navigate(`/day/${cityName}`);
    } else if (periodInput === "week" && cityName) {
      navigate(`/week/${cityName}`);
    }
  };

  const handleCityNameChange = (e) => {
    const cityNameInput = e.target.value;
    setCityName(cityNameInput);
  };

  return (
    <div>
      <St.Title>보리몽의 날씨 예보</St.Title>
      <St.Search>
        <select value={period} onChange={handlePeriodChange}>
          <option value="day">오늘</option>
          <option value="week">주간</option>
        </select>
        <input type="search" onChange={handleCityNameChange} defaultValue={cityName}/>
        <button onClick={searchBtnClick}>날씨 검색</button>
      </St.Search>
    </div>
  );
}

const St = {
  Title: styled.div`
    background-color: ${theme.colors.red};
    font-size: 5rem;
  `,
  Search: styled.div`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.orange};
    & > * {
      font-size: 3rem;
    }
  `,
};
