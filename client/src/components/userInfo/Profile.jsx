import React from "react";
import { BsCamera } from "react-icons/bs";
import { styleVar } from "../../variableStyle";
import profile from "../../images/profile.png";
import styled from "styled-components"
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Profile = () => {
  const FormCon = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4%;
    gap: 20px;
    & .imgCon {
      width: 147px;
      height: 147px;
      border-radius: 50%;
      position: relative;
      margin: auto;
      & img {
        width: 100%;
        height: 100%;
      }
      & .conICon {
        position: absolute;
        top: 70%;
        right: 5%;
        background-color: ${styleVar.mainColor};
        font-size: 25px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        & .icon {
          color: white;
        }
      }
    }
    & .passTitle {
      width: 100%;
      & h3 {
        color: #3d3d3d;
        font-size: 20px;
        font-weight: 600;
      }
    }
    & .submit {
      padding: 5px 20px;
      background: #199956;
      color: white;
      font-size: 16px;
      font-weight: 500;
      margin-left: auto;
      border-radius: 5px;
      border:none;
    }
  `;
  const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 4%;

    & .input-con {
      width: 48%;
      & p {
      }
      & input {
        background: #f4f2f2;
      }
    }
  `;
  const TextFieldCon = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    & p {
      color: #3d3d3d;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-align: left;
    }

    & input {
      width: 100%;
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      padding: 10px 15px;
      height: 100%;
    }
    & .input-box {
      width: 100%;
      position: relative;
      & .icon {
        position: absolute;
        top: 32%;
        right: 10px;
      }
    }
  `;

  return (
    <FormCon>
      <div className="imgCon">
        <img src={profile} alt="" />
        <div className="conICon">
          <BsCamera className="icon" />
        </div>
      </div>
      <InputsContainer>
        <TextFieldCon className="input-con">
          <p>Username</p>
          <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
        </TextFieldCon>
        <TextFieldCon className="input-con">
          <p>Phone</p>
          <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
        </TextFieldCon>
        <TextFieldCon className="input-con">
          <p>Email</p>
          <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
        </TextFieldCon>
        <TextFieldCon className="input-con">
          <p>Account Type</p>
          <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
        </TextFieldCon>
      </InputsContainer>
      <div className="passTitle">
        <h3>Change Password</h3>
      </div>
      <InputsContainer>
        <TextFieldCon className="input-con">
          <p>Current password</p>
          <div className="input-box">
            <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
            <AiOutlineEye className="icon" />
          </div>
        </TextFieldCon>
        <TextFieldCon className="input-con">
          <p>New secure password</p>
          <div className="input-box">
            <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
            <AiOutlineEyeInvisible className="icon" />
          </div>
        </TextFieldCon>
        <TextFieldCon className="input-con">
          <p>Confirm New secure password</p>
          <div className="input-box">
            <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
            <AiOutlineEye className="icon" />
          </div>
        </TextFieldCon>
      </InputsContainer>
      <input className="submit" type="submit" value="save change" />
    </FormCon>
  );
};

export default Profile;
