import React, { useState } from "react";
import { useEffect } from "react";
import theme from "../styles/theme";
import styled from "styled-components";

export default function Header(props) {
  const { levels, level, changeLevel, score, scoreChanged } = props;
  const [totalCards, setTotalCards] = useState(5);

  useEffect(() => {
    setTotalCards(levels[level]);
  }, [level]);

  return (
    <HeaderContainer score={score}>
      <h2>춘식이를 맞춰주세요</h2>
      <div className="score">
        {score}/{totalCards}
      </div>
      <div>
        <button onClick={() => changeLevel("EASY")}>EASY</button>
        <button onClick={() => changeLevel("NORMAL")}>NORMAL</button>
        <button onClick={() => changeLevel("HARD")}>HARD</button>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  text-align: center;
  & > h2 {
    font-size: 5rem;
    padding: 5rem 5rem;
    background-color: ${theme.colors.lightPurple};
  }
  & > div {
    background-color: ${theme.colors.lightYellow};
    & > button {
      border: none;
      background-color: ${theme.colors.pink};
      font-size: 2.5rem;
      margin-right: 1rem;
      margin-bottom: 2rem;
      border-radius: 1rem;
      cursor: pointer;
      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.pink};
      }
    }
  }
  & > .score {
    font-size: 3rem;
    padding: 3rem 3rem;
    animation: ${(props) =>
      props.scoreChanged ? "grow 0.5s ease-in-out" : "none"};
    transition: font-size 0.3s ease-in-out;

    @keyframes grow {
      from {
        font-size: 2rem;
      }
      to {
        font-size: 5rem;
      }
    }
  }
`;
