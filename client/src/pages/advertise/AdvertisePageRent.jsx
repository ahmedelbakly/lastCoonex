import React, { useState } from "react";
import styled from "styled-components"
import MainContainer from "../../components/main/Container";
import Banner from "../../components/home/Banner";
import bannerRight from "../../images/bannerRight.png";
import bannerLeft from "../../images/bannerLeft.png";
import Advertise from "../../images/Advertise.png";
import AdvBanner from "../../components/advertise/AdvBanner";
import CreateAddOne from "../../components/advertise/CreateAddOne";
import CreateAddTwo from "../../components/advertise/CreateAddTwo";
import CreateAddThree from "../../components/advertise/CreateAddThree";
import CreateAddFour from "../../components/advertise/CreateAddFour";
import VerificationPhone from "../../components/advertise/VerificationPhone";

const AdvertisePageRent = () => {
  const [index, setIndex] = useState(2);
  const Slides = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div {
      width: 22%;
      height: 4px;
      background: #e2e2e2;
      border-radius: 146px;
    }
    & .active {
      background: #199956 !important;
    }
  `;
  const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    & h3,
    & p {
      color: var(--black, #3d3d3d);

      font-size: 18px;
      font-weight: 600;
    }
  `;
  const titles = [
    "Basic Information",
    "Property Information",
    "Extra Information",
    "Additional Information",
  ];
  return (
    <MainContainer>
      <AdvBanner text="Properties for rent ads"/>

      <MainContainer padding="50px 10%">
        <Title>
          <h3>{titles[0]}</h3>
          <p>{index}/4</p>
        </Title>
        <Slides className="slides">
          <div className={`slide ${index >= 1 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 2 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 3 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 4 ? "active" : ""}`}></div>
        </Slides>
        {/* <CreateAddOne />*/}
        {/*<CreateAddTwo />*/}
        {/*<CreateAddThree />*/}
        {/*<CreateAddFour />*/}
        {<VerificationPhone />}
      </MainContainer>
    </MainContainer>
  );
};

export default AdvertisePageRent;
