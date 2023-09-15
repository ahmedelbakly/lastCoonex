import React from "react";
import MainContainer from "../../components/main/Container";
import AdvBanner from "../../components/advertise/AdvBanner";
import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { FcAdvertising } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCamera } from "react-icons/bs";
import { styleVar } from "../../variableStyle";
import Notification from "../../components/userInfo/Notification";
import { Link } from "react-router-dom";

const NotificationPage = () => {
  const Container = styled.div`
    width: 100%;
 
    display: flex;
    justify-content: space-between;
    gap: 4%;
  `;
  const SideBar = styled.div`
    width: 30%;
    border: ${styleVar.borderStyle};
    border-radius: 10px;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 20px;
    & .item {
      width: 100%;
      height: 50px;
      border-bottom: ${styleVar.borderStyle};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      & a {
        color: ${styleVar.mainColor};
        font-size: 16px;
        font-weight: 600;
      }
      & .icon {
        font-size: 20px;
      }
    }
    & .last {
      border: none;
    }
  `;
  const Content = styled.div`
    width: 66%;
   
    border: ${styleVar.borderStyle};
    padding: 30px 0px;
    
  `;
  return (
    <MainContainer>
      <AdvBanner text="Notification" />
      <MainContainer padding="30px 50px">
        <Container>
          <SideBar>
            <div className="item">
              <CiEdit className="icon" />
              <Link to ="/profile">My Profile</Link>
            </div>
            <div className="item">
              <IoMdNotificationsOutline className="icon" />
              <Link to="/notification">notifications</Link>
            </div>
            <div className="item">
              <FcAdvertising className="icon" />
              <Link to="/advertisement">advertisements</Link>
            </div>
            <div className="item last">
              <FiLogOut className="icon" />
              <a href="/">Log out</a>
            </div>
          </SideBar>
         <Content>
           <Notification/>
         </Content>
        </Container>
      </MainContainer>
    </MainContainer>
  );
};

export default NotificationPage;
