import React, { useState } from "react";
import { useEffect } from "react";
import theme from "../styles/theme";
import styled from "styled-components";

export default function Header(props) {
  const { levels, level, changeLevel, score, changeResetClicked } = props;
  const [totalCards, setTotalCards] = useState(5);
  const [prevScore, setPrevScore] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setTotalCards(levels[level]);
  }, [level]);

  useEffect(() => {
    if (score !== prevScore) {
      setScale(1.3);
      setTimeout(() => {
        setScale(1);
        setPrevScore(score);
      }, 500);
    }
  }, [score, prevScore]);

  const reset = () => {
    changeLevel('EASY');
    changeResetClicked();
  }

  return (
    <HeaderContainer score={score}>
      <h2>춘식이를 맞춰주세요<button onClick={reset}>Reset</button></h2>
      <div className="score">
        <span style={{ transform: `scale(${scale})` }}>
          {score}/{totalCards}
        </span>
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
    background-color: ${theme.colors.lightYellow};
    & > button {
      border: none;
      background-color: ${theme.colors.pink};
      font-size: 3.5rem;
      position: fixed;
      right: 3rem;
      z-index: 1;
      border-radius: 1rem;
    }
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
    & > span {
      font-size: 3rem;
      padding: 3rem 3rem;
      display: inline-block;
    }
  }
`;
