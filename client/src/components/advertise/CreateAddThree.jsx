import React from "react";
import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io";
import owner from "../../images/owner.png";

const CreateAddThree = ({ value }) => {
  const Container = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20xp;
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
      width: 45%;
      & p {
      }
      & input {
        background: #f4f2f2;
      }
    }
    & .ownerCon {
      width: 45%;
      & .owner {
        width: 20%;
        & p {
        }
        & .con {
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: center;
          margin-top: 5px;
          & input {
            background: #f4f2f2;
            display: none;
            
          }
          & label {
          
            padding: 15px 25px;
            border: 1px solid #199956;
            border-radius: 10px;
            width: 190px;
            text-align: center;
          }
          & img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
          }
        }
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
        <TextField fieldName="Lister Type" options={[]} />
        <TextField fieldName="Payment Method" options={[]} />
        <TextField fieldName="Furnished / Unfurnished: *" options={[]} />
        <TextField fieldName="Property Mortgaged ?:" options={[]} />
        <div className="ownerCon">
          <TextFieldCon className="owner">
            <p>A Project by</p>
            <div className="con">
              <label id="file-input-label" for="file-input">
                upload
              </label>
              <input type="file" id="file-input" />
              <img src={owner} alt="" />
            </div>
          </TextFieldCon>
        </div>
      </InputsContainer>

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

export default CreateAddThree;

const TextField = ({ fieldName, options }) => {
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
