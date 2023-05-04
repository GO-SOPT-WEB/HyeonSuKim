import React, { useEffect, useState } from "react";
import { data } from "../assets/data";
import styled from "styled-components";

export default function Cards(props) {
  const { levels, level } = props;
  const [cards, setCards] = useState([]);

useEffect(() => {
  setCards(
    data
      .slice(0, levels[level])
      .flatMap((item) => {
        const card = <Card key={item.id} cardImg={item.cardImg} />;
        return [card, card];
      })
      .sort(() => Math.random() - 0.5)
  );
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
