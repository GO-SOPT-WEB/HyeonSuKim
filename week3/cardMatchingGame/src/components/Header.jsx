import React, { useState } from "react";
import { useEffect } from "react";
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
      <div>{score}/{totalCards}</div>
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
  }
`;
