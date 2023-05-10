import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

export default function Header() {
  return (
    <div>
      <St.Title>보리몽의 날씨 예보</St.Title>
      <St.Search>
        <select>
          <option>오늘</option>
          <option>주간</option>
        </select>
        <input type="search" />
        <button>날씨 검색</button>
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
