import React from "react";
import styled from "styled-components"
import Card from "./Card";

const CardContainer = ({justify,cardWidth}) => {
  const CardsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 25px;
    
  `;
  return <CardsBox>
  
  <Card width={cardWidth}/>
  <Card width={cardWidth}/>
  <Card width={cardWidth}/>
  <Card width={cardWidth}/>
  <Card width={cardWidth}/>
  <Card width={cardWidth}/>
  </CardsBox>;
};

export default CardContainer;
