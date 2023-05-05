import React, { useEffect, useState } from "react";
import { data } from "../assets/data";
import styled from "styled-components";

export default function Cards(props) {
  const { levels, level, score, changeScore } = props;
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  //카드 클릭 시, clickedCards 배열에 카드 id 추가
  const handleCardClick = (cardId) => {
    setClickedCards((prev) => [...prev, cardId]);
  };

  //레벨에 따라 카드 랜덤하게 선택하고 랜덤하게 배열
  useEffect(() => {
    setCards(
      data
        .sort(() => Math.random() - 0.5)
        .slice(0, levels[level])
        .flatMap((item) => {
          const card = (
            <Card
              key={item.id}
              cardImg={item.cardImg}
              onClick={() => handleCardClick(item.id)}
              disabled={matchedCards.includes(item.id)}
            />
          );
          const secondCard = { ...card, key: `${item.id}-2` };
          return [card, secondCard];
        })
        .sort(() => Math.random() - 0.5)
    );
  }, [level]);

  //클릭된 카드가 서로 같은 카드인지 체크하고, 같은 카드이면 matchedCards 배열에 저장
  useEffect(() => {
    if (clickedCards.length !== 2) {
      return;
    }
    const [card1, card2] = clickedCards;

    if (card1 === card2) {
      if (!matchedCards.includes(card1)) {
        changeScore(score + 1);
      }
      setMatchedCards((prev) => [...prev, card1, card2]);
      setTimeout(() => setClickedCards([]), 1000); // 1초 뒤에 setClickedCards([]) 호출
    } else {
      setTimeout(() => setClickedCards([]), 1000); // 1초 뒤에 setClickedCards([]) 호출
    }
  }, [clickedCards]);

  //게임 도중에 레벨을 바꾸면 진행 상황 초기화
  useEffect(() => {
    changeScore(0);
    setClickedCards([]);
    setMatchedCards([]);
  }, [level]);

  return <CardContainer>{cards}</CardContainer>;
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    & > img {
      width: 25rem;
      height: 25rem;
    }
  }
`;

const Card = styled.div`
  background-image: url(${(props) => props.cardImg});
  width: 20rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
`;
