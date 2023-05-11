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
      <St.Title>☂️보리몽의 날씨 예보☂️</St.Title>
      <St.Search>
        <select value={period} onChange={handlePeriodChange}>
          <option value="day">오늘</option>
          <option value="week">주간</option>
        </select>
        <input
          type="search"
          onChange={handleCityNameChange}
          defaultValue={cityName}
          placeholder="영어로 도시명 ex)seoul"
        />
        <button onClick={searchBtnClick}>날씨 검색</button>
      </St.Search>
    </div>
  );
}

const St = {
  Title: styled.div`
    background-color: ${theme.colors.red};
    font-size: 5rem;
    padding: 2rem 1rem;
  `,
  Search: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.orange};
    padding-top: 3rem;
    & > * {
      font-size: 3rem;
      background: none;
      border: none;
    }
    & > select {
      height: 4rem;
      font-size: 2rem;
      background-color: ${theme.colors.white};
      border: 0.5rem solid ${theme.colors.red};
      border-radius: 1rem;
      &:hover {
        background-color: ${theme.colors.yellow};
        border: 0.5rem solid ${theme.colors.white};
        border-radius: 1rem;
        cursor: pointer;
      }
    }
    & > input {
        background-color: ${theme.colors.red};
        margin: 0 2rem;
        border-radius: 1rem;
        height: 7rem;
        width: 50rem;
        text-align: center;
    }
    & > button {
        background-color: ${theme.colors.red};
        cursor: pointer;
        padding: 2rem 1rem;
        border-radius: 1rem;
        color: ${theme.colors.white}
    }
  `,
};
