import React from "react";
import styled from "styled-components";

const MainContainer = ({ children,customClass,bg ,padding}) => {
  const Container = styled.div`
    width: 100%;
    padding:${padding};
    background:${bg};
  `;
  return <Container className={customClass}>{children}</Container>;
};

export default MainContainer;
