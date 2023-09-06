import React from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
const Swiper = ({ array1, array2}) => {
  const SwiperContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    margin-bottom:30px;
    & .items-show {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0px;
      & button {
        padding:2px 15px;
        font-weight: 400;
        color:#3D3D3D;
        font-weight: 400;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #e2e2e2;
        transition: all .5s;
        &:hover {
       
        background: #199956;
        color:#fff;
        
      }
      }
      
    }
    & .arrow {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      padding: 3px;
      box-shadow: 0px 2px 15px 0px gray;
      transition: all .3s;
    }
    & .arrow:hover {
        box-shadow: 0px 2px 15px 0px #199956;
    }
  `;

  return (
    <SwiperContainer>
      <FiChevronLeft class="arrow" />
      <div className="items-show">
        {array1.map((button, index) => (
          <button> {button} </button>
        ))}
        {array2.map((item, index) => (
           item
        ))}
      </div>
      <FiChevronRight class="arrow" />
    </SwiperContainer>
  );
};

export default Swiper;
