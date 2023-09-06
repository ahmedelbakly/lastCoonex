import React from "react";
import styled from "styled-components";

const SubButton = ({ icon, text, color, childColor }) => {
  const SubBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${color};
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    border: solid 2px  #B49668 !important; //${color === "black" ? "white" : "black"} !important;

    & div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      & child1 {
        font-weight: 500;
        color:#121212
      }

      & child2 {
        font-size: 12px;
        color:#121212 !important;
        font-weight: 400;
      }
    }
  `;
  return (
    <SubBtn>
      {icon}
      <div>
        <p class="child1">Available on</p>
        <p class="child1">{text}</p>
      </div>
    </SubBtn>
  );
};

export default SubButton;
