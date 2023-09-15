import React from "react";
import styled from "styled-components";
import loginPanner from "../../images/loginPanner.png";
import loginLogo from "../../images/loginLogo.png";
import { passSvg, emailSvg } from "./loginSvg.js";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  const LoginContainer = styled.div`
    width: 820px;
    height: 500px;
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
        gap: 20px;
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
        justify-content: space-between;
        width: 100%;
        gap: 10px;
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;
        & .first {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5px;
        }
        & p {
          font-weight: 400;
          font-size: 14px;
          color: #3d3d3d;
        }

        & a {
          
          color: #199956;
          font-size: 14px;
          font-weight: 500;
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
        margin-bottom: 20px;
      }
      & .last {
        width: 100%;
        text-align: center;
        color: #3d3d3d;
        font-weight: 400;

        & a {
          color: #199956;
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
        <p className="formTitle">Login</p>
        <form>
          <TextField fieldName="Email" type="email" logo={emailSvg} />
          <TextField fieldName="Password" type="password" logo={passSvg} />
          <div className="checkbox">
            <div className="first">
              <input value="test" type="checkbox" />
              <p>Keep me signed in</p>
            </div>
            <a href="/">Forgot Password?</a>
          </div>
          <input className="Signup" value="Login" type="submit" />
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
          Don’t have an account ? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <div className="imgCon">
        <img src={loginPanner} alt="" />
        <p>Buy, sell, and invest in real estate with trusted agents</p>
      </div>
    </LoginContainer>
  );
};

export default Login;

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
