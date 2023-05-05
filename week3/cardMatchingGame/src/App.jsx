import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/reset";
import Cards from "./components/Cards";
import theme from "./styles/theme";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("EASY");
  const levels = {
    EASY: 5,
    NORMAL: 7,
    HARD: 9,
  };
  const changeLevel = (level) => {
    setLevel(level);
  };
  const changeScore = (score) => {
    setScore(score);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header changeLevel={changeLevel} levels={levels} level={level} score={score} />
      <Cards levels={levels} level={level} score={score} changeScore={changeScore} />
    </ThemeProvider>
  );
}
