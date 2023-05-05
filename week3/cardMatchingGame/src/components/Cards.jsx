import React, { useEffect, useState } from "react";
import { data } from "../assets/data";
import styled from "styled-components";

export default function Cards(props) {
  const { levels, level, score, changeScore } = props;
  const [cards, setCards] = useState([]);

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (cardId) => {
    setSelectedCards((prev) => [...prev, cardId]);
  };

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
            />
          );
          const secondCard = { ...card, key: `${item.id}-2` };
          return [card, secondCard];
        })
        .sort(() => Math.random() - 0.5)
    );
  }, [level]);

  useEffect(() => {
    if (selectedCards.length !== 2) {
      return;
    }
    const [card1, card2] = selectedCards;
    if (card1 === card2) {
      changeScore(score + 1);
      setTimeout(() => setSelectedCards([]), 1000); // 1초 뒤에 setSelectedCards([]) 호출
    } else {
      setTimeout(() => setSelectedCards([]), 1000); // 1초 뒤에 setSelectedCards([]) 호출
    }
  }, [selectedCards]);

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
