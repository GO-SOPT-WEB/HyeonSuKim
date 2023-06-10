import { useEffect, useState, useMemo } from "react";
import { data } from "../assets/data";
import styled from "styled-components";
import theme from "../styles/theme";
import backCardImg from "../assets/backCardImg.jpg";
import { useRecoilState, useRecoilValue } from "recoil";
import { levelState, scoreState, resetClickedState } from "../atoms/atom";
import { levels } from "../constants/constants";

interface CardProps {
  cardImg: string;
  onClick: () => void;
  matchedCards: boolean;
  clickedCards: boolean;
}

interface CardType {
  id: number;
  cardImg: string;
}

export default function Cards() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const [score, setScore] = useRecoilState(scoreState);
  const level = useRecoilValue(levelState);
  const resetClicked = useRecoilValue<boolean>(resetClickedState);

  //쌍을 유지하면서 순서 섞기
  function shufflePairs(arr: CardType[]) {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push([arr[i], arr[i + 1]]);
    }
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
    const shuffled = pairs.flatMap((pair) => pair);
    return shuffled;
  }

  //카드 클릭 시, clickedCards 배열에 카드 id 추가
  const handleCardClick = (cardId: number) => {
    //clickedCards 최대 길이 2로 제한
    if (clickedCards.length < 2) {
      setClickedCards((prev) => [...prev, cardId]);
    }
  };

  //레벨에 따라 카드 랜덤하게 선택하고 랜덤하게 배열
  useEffect(() => {
    setCards(
      shufflePairs(data)
        .slice(0, levels[level] * 2)
        .sort(() => Math.random() - 0.5)
    );
  }, [level]);

  //클릭된 카드가 서로 같은 카드인지 체크하고, 같은 카드이면 matchedCards 배열에 저장
  useEffect(() => {
    //클릭된 카드가 2개 미만이거나 같은 카드를 연속 클릭 시 조기 리턴
    if (clickedCards.length < 2) {
      return;
    }

    const [card1, card2] = clickedCards;
    if (card1 === card2) {
      clickedCards.splice(1, 1);
      return;
    }

    if (data[card1].cardImg === data[card2].cardImg) {
      if (!matchedCards.includes(card1) && card1 !== card2) {
        setScore(score + 1);
      }
      setMatchedCards((prev) => [...prev, card1, card2]);
      setTimeout(() => setClickedCards([]), 1000);
    } else {
      setTimeout(() => setClickedCards([]), 1000);
    }
  }, [clickedCards]);

  //게임 도중에 레벨을 바꾸면 진행 상황 초기화
  useEffect(() => {
    setScore(0);
    setClickedCards([]);
    setMatchedCards([]);
  }, [level, resetClicked]);

  return (
    <CardsContainer>
      {cards.map((item) => (
        <Card
          key={item.id}
          cardImg={item.cardImg}
          onClick={() => handleCardClick(item.id)}
          matchedCards={matchedCards.includes(item.id)}
          clickedCards={clickedCards.includes(item.id)}
        />
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme.colors.lightYellow};
  & > div {
    & > img {
      width: 25rem;
      height: 25rem;
    }
  }
`;

const Card = styled.div<CardProps>`
  background-image: ${(props) =>
    props.matchedCards
      ? `url(${props.cardImg})`
      : props.clickedCards
      ? `url(${props.cardImg})`
      : `url(${backCardImg})`};
  width: 20rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  margin: 6rem;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.matchedCards
      ? "rotateY(360deg)"
      : props.clickedCards
      ? "rotateY(360deg)" // card1
      : "rotateY(0deg)"}; // card2
  backface-visibility: ${(props) => props.cardImg};
`;
