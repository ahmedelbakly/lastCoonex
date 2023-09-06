import React from "react";
import styled from "styled-components";
import loginPanner from "../../images/loginPanner.png";
import loginLogo from "../../images/loginLogo.png";
import { passSvg, emailSvg, userSvg } from "./loginSvg.js";
import { FcGoogle } from "react-icons/fc";
const Singup = () => {
  const LoginContainer = styled.div`
    width: 820px;
    height: 550px;
    background: white;
    display: flex;
    border: 2px #199956 solid;
    
    

    & .fromCon {
      width: 50%;
      background: white;
      height: 100%;
      padding: 30px 40px;
      & form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      & img {
        width: 141px;
        height: 24px;
        margin-bottom: 20px;
      }
      & .formTitle {
        text-align: left;
        color: #3d3d3d;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      & .checkbox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: 10px;
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;

        & a {
          text-decoration-line: underline;
          font-weight: 600;
        }
      }
      & .Signup {
        width: 100%;
        background: #199956;
        border-radius: 7px;
        border: none;
        color: white;
        padding: 3px 0px;
      }
      & .orLine {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3px;
        margin-top: 20px;

        & .text {
          width: max-content;
          font-family: Roboto;
          font-size: 12px;
          font-weight: 700;
        }
        & .line {
          width: 100%;
          flex-grow: 1;
          height: 1px;
          background: #3d3d3d;
        }
      }
      & .google {
        width: 100%;
        text-align: center;
        margin-top: 20px;
      }
      & .last {
        width: 100%;
        text-align: center;
        color: #3d3d3d;
        font-weight: 400;
        & a {
          color:#199956;
          font-weight: 700;
          line-height: 16px;
          text-decoration-line: underline;
        }
      }
    }

    & .imgCon {
      width: 50%;
      background: black;
      height: 100%;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #121212;
        opacity: 0.5;
      }

      & img {
        width: 100%;
        height: 100%;
      }
      & p {
        width: 100%;
        padding: 0px 20px;
        color: white;
        z-index: 2;
        top: 85%;
        left: 0;
        position: absolute;
        text-align: center;
      }
    }
  `;
  return (
    <LoginContainer>
      <div className="fromCon">
        <img src={loginLogo} alt="loginLogo" />
        <p className="formTitle">Sign up</p>
        <form>
          <TextField fieldName="username" type="text" logo={userSvg} />
          <TextField fieldName="Email" type="email" logo={emailSvg} />
          <TextField fieldName="Password" type="password" logo={passSvg} />
          <TextField
            fieldName="Password Confirmation"
            type="password"
            logo={passSvg}
          />
          <div className="checkbox">
            <input value="test" type="checkbox" />
            <p>
              I agree with <a href="/">Terms & Conditions</a>
            </p>
          </div>
          <input className="Signup" value="Sign up" type="submit" />
        </form>
        <div className="orLine">
          <p className="line"></p>
          <p className="text">OR</p>
          <p className="line"></p>
        </div>
        <div className="google">
          <FcGoogle />
        </div>
        <p className="last">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
      <div className="imgCon">
        <img src={loginPanner} alt="" />
        <p>Buy, sell, and invest in real estate with trusted agents</p>
      </div>
    </LoginContainer>
  );
};

export default Singup;

const TextField = ({ fieldName, type, logo }) => {
  const TextFieldCon = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & p {
      color: #3d3d3d;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-align: left;
    }
    & div {
      width: 100%;
      position: relative;
      & .icon-con {
        position: absolute;
        top: 5px;
        left: 5px;
        color: white;
      }
    }
    & input {
      width: 100%;
      font-size: 14px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      padding-left: 30px;
    }
  `;

  return (
    <TextFieldCon>
      <p>{fieldName}</p>
      <div>
        {" "}
        <input type={type} id="" placeholder={fieldName} />
        <span className="icon-con">{logo}</span>
      </div>
    </TextFieldCon>
  );
};
