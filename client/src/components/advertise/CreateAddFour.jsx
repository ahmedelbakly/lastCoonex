import React from "react";
import styled from "styled-components"
import { MdOutlineClose } from "react-icons/md";

const CreateAddFour = ({ value }) => {
  const Container = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    flex-direction: column;
  `;
  const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    & .input-con {
      width: 100%;
      & p {
      }
      & input {
        background: #f4f2f2;
      }
    }
  `;

  const Advantage = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    gap: 50px;
    & .item {
      min-width: 150px;
      padding: 10px 15px;
      background: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #01582b;
      gap: 20px;
      border-radius: 30%;
      transition: all 0.3s;

      &:hover {
        background: #c0f0c0;
      }

      & p {
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.28px;
      }
      & .icon {
        color: red;
      }
    }
  `;

  const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .leftCon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 40%;
    }
    & button {
      display: block;
      border-radius: 8px;
      padding: 6px 20px;
      border: 1px solid #199956;
      background: white;
      transition: all 0.3s;
      min-width: 190px;
      &:hover {
        background: #199956;
        color: white;
      }
    }
  `;

  return (
    <Container>
      <InputsContainer>
        <TextField fieldName="Building Age" options={[]} />
      </InputsContainer>
      <Advantage>
        <div className="item">
          <p>Body soap</p>
          <MdOutlineClose className="icon" />
        </div>
        <div className="item">
          <p>Body soap</p>
          <MdOutlineClose className="icon" />
        </div>
        <div className="item">
          <p>Body soap</p>
          <MdOutlineClose className="icon" />
        </div>
        <div className="item">
          <p>Body soap</p>
          <MdOutlineClose className="icon" />
        </div>
        <div className="item">
          <p>Body soap</p>
          <MdOutlineClose className="icon" />
        </div>
        <div className="item">
          <p>Body soap</p>
          <MdOutlineClose className="icon" />
        </div>
      </Advantage>
      <ButtonsContainer>
        <div className="leftCon">
          <button>Back</button>
          <button>Save as Draft</button>
        </div>
        <button>Next</button>
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAddFour;

const TextField = ({ fieldName, options }) => {
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
      font-weight: 600;
      letter-spacing: 0.5px;
      text-align: left;
    }

    & select {
      width: 100%;
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      padding: 10px 15px;
      height: 100%;
      & option {
        color: #080808;
        font-size: 16px;
        padding: 3px;
      }
    }
  `;

  return (
    <TextFieldCon className="input-con">
      <p>{fieldName}</p>

      <select>
        <option value="select Option">select Option</option>
        <option value="other Option">Other option</option>
        <option value="other Option">Other option</option>
        <option value="other Option">Other option</option>
        <option value="other Option">Other option</option>
      </select>
    </TextFieldCon>
  );
};
