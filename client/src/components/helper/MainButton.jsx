import React from "react";
import styled from "styled-components"

const MainButton = ({ text, padding, size }) => {
  const Button = styled.div`
    padding: ${padding};
    background: #ffffff;
    color: black;
    border-radius: 8px;
    transition: all 0.5s;
    &:hover {
      background: #199956;
      color: #fff;
    }
  `;
  return <Button>{text}</Button>;
};

export default MainButton;
