import React, { useState } from "react";
import { useEffect } from "react";
import theme from "../styles/theme";
import styled from "styled-components";

export default function Header(props) {
  const { levels, level, changeLevel, score } = props;
  const [totalCards, setTotalCards] = useState(5);

  useEffect(() => {
   setTotalCards(levels[level])
  }, [level]);

  return (
    <HeaderContainer>
      <h2>춘식이를 맞춰주세요</h2>
      <div className="score">{score}/{totalCards}</div>
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
  }
  & > .score {
    font-size: 3rem;
    padding: 3rem 3rem;
  }
`;
