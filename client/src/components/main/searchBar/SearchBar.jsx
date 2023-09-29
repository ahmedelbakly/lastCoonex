import React from "react";
import "./searchBar.css"
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
// import { Typography } from '@mui/material';
import "./searchBar.css";
import MainButton from "../../helper/MainButton";
const SearchBar = ({top}) => {
  const SearchCon = styled.div`
    border-radius: 10px;
    box-shadow: 0px 2px 15px 0px gray;
    width: 93.5%;
    height: 170px;
    background-color: #fff;
    position: absolute;
    margin: auto 50px;
    top: ${top};
    z-index: 10;
    padding: 10px 30px;
    display: flex;
    justify-content: space-evenly;

    flex-direction: column;
  `;
  return (
    <>
    <SearchCon className="searchCon">
      <div className="up">
        <form>
          <div className="inputCon">
            <input type="text" placeholder="Search by country and cities" />
            <BiMap className="icon-map" />
          </div>
          <SearchItem text="Property & type" />
          <MainButton text="Clear" padding="5px 20px" size="14px" />
          <MainButton text="Search by AI" padding="5px 20px" size="14px" />
          <MainButton text="Search" padding="5px 20px" size="14px" />
        </form>
      </div>
      <div className="down">
        <SearchItem text="Category" />
        <SearchItem text="Beds & Baths" />
        <SearchItem text="Period" />
        <SearchItem text="Payment & Method" />
        <SearchItem text="Price" />
        <SearchItem text="Area" />
        <SearchItem text="more" />
      </div>
    </SearchCon>


   

   
    
    </>
  );
};

export default SearchBar;

const SearchItem = ({ text }) => {
  const SearchButton = styled.div`
    width: max-content;
    padding: 1px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #e2e2e2;
    & p {
      font-size: 14px;
      font-weight: 400;
    }
    /* &:hover {
      background: #199956;
      color: #fff;
    } */
  `;

  return (
    <SearchButton className="searchItem">
      <p>{text}</p>
      <>
        <RiArrowDropDownLine
          color="#3D3D3D"
          fontSize="30px"
          onClick={() => console.log("hadeer zabola")}
        />
      </>
    </SearchButton>
  );
};
