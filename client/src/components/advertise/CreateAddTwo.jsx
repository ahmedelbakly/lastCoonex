import React from "react";
import styled from "styled-components"
import { GrUpload } from "react-icons/gr";

const CreateAddTwo = ({ value }) => {
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
          <p>City *</p>

          <input type="text" id="" placeholder="city" />
        </TextFieldCon>
        <TextField fieldName="Surface area *" options={[]} />
        <TextFieldCon className="input-con">
          <p>Price*</p>

          <input type="number" id="" placeholder="price" />
        </TextFieldCon>
       
        <TextField fieldName="Baths *" options={[]} />
        <TextField fieldName="Rooms *" options={[]} />
        <TextField fieldName="Floor *" options={[]} />
  
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

export default CreateAddTwo;

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
