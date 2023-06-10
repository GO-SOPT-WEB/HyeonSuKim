import { useState } from "react";
import { useEffect } from "react";
import theme from "../styles/theme";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { scoreState, levelState, resetClickedState } from "../atoms/atom";
import { levels } from "../constants/constants";


const Header = () => {
  const [totalCards, setTotalCards] = useState<number>(5);
  const [prevScore, setPrevScore] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);

  const score = useRecoilValue(scoreState);
  const [level, setLevel] = useRecoilState(levelState);
  const [resetClicked, setResetClicked] = useRecoilState<boolean>(resetClickedState);


  //레벨에 따라 총 카드 수 달리 하기
  useEffect(() => {
    setTotalCards(levels[level]);
  }, [level]);

  //짝이 맞는 카드 선택 시 애니메이션
  useEffect(() => {
    if (score !== prevScore) {
      setScale(1.3);
      setTimeout(() => {
        setScale(1);
        setPrevScore(score);
      }, 500);
    }
  }, [score, prevScore]);

  //리셋버튼 클릭 핸들러
  const reset = () => {
    setLevel("EASY");
    setResetClicked(!resetClicked);
  };

  return (
    <HeaderContainer score={score}>
      <h2>
        춘식이를 맞춰주세요<button onClick={reset}>Reset</button>
      </h2>
      <div className="score">
        <span style={{ transform: `scale(${scale})` }}>
          {score}/{totalCards}
        </span>
      </div>
      <div>
        <button onClick={() => setLevel("EASY")}>EASY</button>
        <button onClick={() => setLevel("NORMAL")}>NORMAL</button>
        <button onClick={() => setLevel("HARD")}>HARD</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ score: number }>`
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
