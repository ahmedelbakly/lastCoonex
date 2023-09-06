import React from "react";
import styled from "styled-components"
import { GrUpload } from "react-icons/gr";

const CreateAddOne = ({ value }) => {
  const Container = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20xp;
    margin-top: 20px;
    flex-direction: column;
    & .videoCon {
      width: 100% !important;
    }
    & .disCon {
      width: 100% !important;
      & textarea {
        padding: 20px;
        color: #8898aa;
        width: 100% !important;
        border-radius: 10px;
        border: 1px solid #e2e2e2;
      }
    }
    & .add-img {
      width: 100% !important;
      height: 124px;
      & .input {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100%;
        border-radius: 10px;

        border: 1px solid #e2e2e2;
        & input {
          width: max-content;
          height: max-content;
          text-align: center;
          padding-left: 18%;
          border: none;
          display: none;
        }
        & label {
          color: #199956;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 4px;
          & .icon {
            color: green !important;
          }
        }
      }
    }
  `;
  const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    & .input-con {
      width: 30%;
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
  `;

  const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
      display: block;
      border-radius: 8px;
      padding: 6px 20px;
      border: 1px solid #199956;
      background: white;
      transition: all 0.3s;
      min-width: 190px ;
      &:hover {
        background: #199956;
        color: white;
      }
    }
  `;

  const AddImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 124px;
    border: 1px solid #f80202;
    margin-bottom: 20px;

    & .child {
      width: max-content;
    }
  `;

  return (
    <Container>
      <InputsContainer>
        <TextFieldCon className="input-con">
          <p>Ad Title *</p>

          <input type="" id="" placeholder="e.g. 2000 Sqft House for Sale" />
        </TextFieldCon>
        <TextField fieldName="Property Type *" options={[]} />
        <TextField fieldName="Category *" options={[]} />
      </InputsContainer>
      <TextFieldCon className="input-con videoCon">
        <p>Detailed Video Link *</p>
        <input type="url" id="" placeholder="https:/www.Haraj X.com" />
      </TextFieldCon>
      <TextFieldCon className="input-con disCon">
        <p>Ad Description *</p>
        <textarea
          type=""
          cols={187}
          rows={5}
          placeholder="Describe your property"
        />
      </TextFieldCon>
      <TextFieldCon className="add-img">
        <p>Add Images *</p>
        <div className="input">
          <label id="file-input-label" for="file-input">
            <GrUpload fontSize="20px"  className="icon"/>
            <p style={{color:"#199956"}}>Upload the image or browse your device</p>
          </label>
          <input type="file" name="" id="file-input" />
        </div>
      </TextFieldCon>
      <ButtonsContainer>
        <button>Save as Draft</button>
        <button>Next</button>
      </ButtonsContainer>
    </Container>
  );
};

export default CreateAddOne;

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
