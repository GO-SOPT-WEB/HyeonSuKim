import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/reset";
import Cards from "./components/Cards";
import theme from "./styles/theme";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { levelState, scoreState, showModalState } from "./atoms/atom";
import { levels } from "./constants/constants";

export default function App() {
  const score = useRecoilValue<number>(scoreState);
  const level = useRecoilValue<"EASY" | "NORMAL" | "HARD">(levelState);
  const [showModal, setShowModal] = useRecoilState<boolean>(showModalState);

  useEffect(() => {
    if (score === levels[level]) {
      setShowModal(true);
    }
  }, [score]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Cards />
      <Modal />
    </ThemeProvider>
  );
}
