import React from "react";
import styled from "styled-components"
import MainContainer from "../../main/Container";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import Swiper from "../swiper/Swiper";
import CardContainer from "../CardContainer";
const ItemsContainer = ({ arrayItem, buttonsArray, text,cardWidth }) => {
  const TextAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: max-content;
    margin-bottom: 20px;
    & .title {
      width: max-content;
      font-weight: 600;
      font-size: 20px;
      color: #3d3d3d;
      padding-left: 20px;
     
    }
    & button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: max-content;
      gap: 3px;
      text-transform: capitalize;
      font-weight: 600;
      color: #199956;
      background: #fff;
      border: none;
    }
  `;

  return (
    <MainContainer customClass="item-container" padding="32px 50px">
      <TextAndButton>
        <p className="title">{text}</p>
        <button>
          <p>View All</p> <FiChevronRight />
        </button>
      </TextAndButton>
      <Swiper array1={buttonsArray}  array2={[]}/>
      <CardContainer  justify="space-between" cardWidth={cardWidth}/>
    </MainContainer>
  );
};

export default ItemsContainer;
