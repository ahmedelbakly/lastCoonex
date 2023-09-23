import React from "react";
import styled from "styled-components";
const Button = styled.button`

background: #ffffff;
color: black;
border-radius: 8px;
transition: all 0.5s;
&:hover {
  background: #199956;
  color: #fff;
}
`;
const MainButton = ({ text, padding, size, click }) => {
 
  return <Button style={{padding:padding}} onClick={() => click()}>{text}</Button>;
};

export default MainButton;
