import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styleVar } from "../../variableStyle";
import proAver from "../../images/proAver.png";
import styled from "styled-components"
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { select } from "react-i18next";

const Advertisement = () => {
  const Container = styled.div`
    width: 100%;
  `;
  const Header = styled.div`
    width: 100%;
    & .inputAndButton {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2%;
      & .inputs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 6%;
        & .textCon {
          position: relative;
          & input {
            width: 100%;
            font-weight: 400;
            font-size: 14px;
            font-weight: 400;
            width: 309px;
            height: 40px;
            border-radius: 8px;
            padding: 5px;
            padding-left: 13%;
          }
          & .icon {
            position: absolute;
            top: 25%;
            left: 5%;
            font-size: 20px;
          }
        }
        & select {
          width: 107px;
          height: 40px;
          padding: 10px;
          border-radius: 8px;
          & option {
            font-size: 15px;
          }
        }
      }
      & a {
        padding: 8px 20px;
        background-color: #199956;
        color: white;
        border-radius: 10px;
      }
    }
  `;
  const Content = styled.div`
    padding: 2%;
    & .empty {
      width: 100%;
      height: 500px;
      background-color: orange;
      display: flex;
      justify-content: center;
      align-items: center;
      & .banner {
        width: 60%;
        height: 70%;
        background-color: red;
      }
    }
    & .cardsContainer {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2%;
      row-gap: 20px;
      flex-wrap: wrap;
    }
  `;

  return (
    <Container>
      <Header>
        <div className="inputAndButton">
          <div className="inputs">
            <div className="textCon">
              <input type="text" placeholder="Search any thing" />
              <AiOutlineSearch className="icon" />
            </div>
            <select>
              <option value="Status">Status</option>
              <option value="house">house</option>
            </select>
          </div>
          <a href="/">add new Add</a>
        </div>
      </Header>
      <Content>
        {/* <div className="empty">
        <div className="banner"></div>
  </div>*/}
        <div className="cardsContainer">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Content>
    </Container>
  );
};

export default Advertisement;

const Card = () => {
  const Container = styled.div`
    width: 32%;
    height: 370px;
    border: ${styleVar.borderStyle};
    border-radius: 10px;

    & .imgCon {
      width: 100%;
      height: 45%;
      /* background-color:black ; */
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & .contentCon {
      width: 100%;
      padding: 4%;
      display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        row-gap: 7px;

      & .status {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .value {
          color: #24b06d;
          font-size: 12px;
          font-weight: 400;
          border-radius: 10px;
          border: 1px solid #24b06d;
          background: #fff;
          padding: 3px 10px;
        }
        & .list {
          font-size: 25px;
          color: #199956;
        }
      }
      & h3 {
        color: var(--black, #3d3d3d);
        font-size: 16px;
        font-weight: 600;
        text-transform: capitalize;
      }
    }
    & .description {
      color: #8898aa;
      font-size: 10px;
      font-weight: 400;
      padding-bottom: 10px;
      border-bottom: ${styleVar.borderStyle};
    }
    & .numData {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & p:first-child {
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;
        text-transform: capitalize;
      }
      & p:nth-child(2) {
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 600;
      }
    }
  `;

  return (
    <Container>
      <div className="imgCon">
        <img src={proAver} alt="" />
      </div>
      <div className="contentCon">
        <div className="status">
          <p className="value">Active</p>
       <FiMoreHorizontal  className="list"/>
        </div>
        <h3>Al Khaleej Village, Al...</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor.
        </p>
        <div className="numData">
          <p>impressions Number</p>
          <p>20</p>
        </div>
        <div className="numData">
          <p>Clicks Number</p>
          <p>400</p>
        </div>
        <div className="numData">
          <p>Leads</p>
          <p>1000</p>
        </div>
      </div>
    </Container>
  );
};
