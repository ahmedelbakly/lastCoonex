import React from "react";
import styled from "styled-components"
import CardTwo from "./CardTwo";

const CardContainerTwo= ({justify}) => {
  const CardsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${justify};
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  `;
  return <CardsBox>
  
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  <CardTwo/>
  </CardsBox>;
};

export default CardContainerTwo;
