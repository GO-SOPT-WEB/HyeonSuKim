import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/reset";
import Cards from "./components/Cards";
import theme from "./styles/theme";
import Header from "./components/Header";
import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("EASY");
  const [resetClicked, setResetClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
  };
  const changeResetClicked = () => {
    setResetClicked(!resetClicked);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if(score === 5){
       setShowModal(true)
    }
  }, [score]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        changeLevel={changeLevel}
        levels={levels}
        level={level}
        score={score}
        changeResetClicked={changeResetClicked}
      />
      <Cards
        levels={levels}
        level={level}
        score={score}
        changeScore={changeScore}
        resetClicked={resetClicked}
      />
      <Modal isOpen={showModal} onClose={handleClose} />
    </ThemeProvider>
  );
}
