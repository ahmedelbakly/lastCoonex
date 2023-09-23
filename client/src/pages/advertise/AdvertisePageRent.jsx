import React, { useState } from "react";
import styled from "styled-components"
import MainContainer from "../../components/main/Container";
import Banner from "../../components/home/Banner";
import bannerRight from "../../images/bannerRight.png";
import bannerLeft from "../../images/bannerLeft.png";
import Advertise from "../../images/Advertise.png";
import AdvBanner from "../../components/advertise/AdvBanner";
import CreateAddOne from "../../components/advertise/rentSteps/CreateAddOne";
import CreateAddTwo from "../../components/advertise/rentSteps/CreateAddTwo";
import CreateAddThree from "../../components/advertise/rentSteps/CreateAddThree";
import CreateAddFour from "../../components/advertise/rentSteps/CreateAddFour";
import VerificationPhone from "../../components/advertise/rentSteps/VerificationPhone";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { titles } from "./saleStyled";
import { axiosExpire } from "../../axiosExpire";
const Slides = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

& div {
  width: 22%;
  height: 4px;
  background: #e2e2e2;
  border-radius: 146px;
}
& .active {
  background: #199956 !important;
}
`;
const Title = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
& h3,
& p {
  color: var(--black, #3d3d3d);

  font-size: 18px;
  font-weight: 600;
}
`;
const AdvertisePageRent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///////////////////////////////////////////////
  const [index, setIndex] = useState(1);
  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };
  const handleBack = () => {
    setIndex((prev) => prev - 1);
  };
  ///////////////////////////////////////////////////////////////////////////////////
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);
  /////////////////////////////////////////////////////////////////////////////////////////////
  const [productRentData, setProductRentData] = useState({
    title: "",
    userId:localStorage.getItem("coonexUId"),
    videoLink: "",
    propertyType: "",
    category: "",
    description: "",
    city: "",
    price: 0,
    rooms: 0,
    surfaceArea: "",
    paths: 0,
    floor: 0,
    buildingAge: 0,
    listerType: "",
    paymentMethod: "",
    furnished: "",
    mortgaged: "",
    unitDetails:[]
  });
  //////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    setProductRentData({ ...productRentData, [e.target.name]: e.target.value });
  };
  console.log(productRentData);
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);

  };
  const handleChangeFiles = (e) => {
    setFiles(e.target.files);
  };
  //////////////////////////////////////////////////////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ads",JSON.stringify(productRentData));
    formData.append("logo", file);
    for (let i = 0; i < files.length; i++) {
      formData.append("proImg", files[i])
    }
    axiosExpire
      .post("http://localhost:3001/adRent", formData)
      .then(function (response) {
        const data = response.data;
        console.log(data);
        setFiles(null);
        setFile(null);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

///////////////////////////////////////////////////////////////////////////////////////////
  return (
    <MainContainer>
      <AdvBanner text="Properties for rent ads"/>

      <MainContainer padding="50px 10%">
        <Title>
          <h3>{titles[0]}</h3>
          <p>{ index < 5 && index}/4</p>
        </Title>
        <Slides className="slides">
          <div className={`slide ${index >= 1 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 2 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 3 ? "active" : ""}`}></div>
          <div className={`slide ${index >= 4 ? "active" : ""}`}></div>
        </Slides>
        <form onSubmit={handleSubmit}>
          {index === 1 && (
            <CreateAddOne
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              productRentData={productRentData}
              setProductRentData={setProductRentData}
              handleChangeFiles={handleChangeFiles}
            />
          )}
          {index === 2 && (
            <CreateAddTwo
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              productRentData={productRentData}
              setProductRentData={setProductRentData}
            />
          )}
          {index === 3 && (
            <CreateAddThree
              handleNext={handleNext}
              handleBack={handleBack}
              productRentData={productRentData}
              setProductRentData={setProductRentData}
              handleChangeFile={handleChangeFile}
            />
          )}
          {index === 4 && (
            <CreateAddFour
              handleNext={handleNext}
              handleBack={handleBack}
              productRentData={productRentData}
              setProductRentData={setProductRentData}
              handleSubmit={handleSubmit}
              handleChangeFile={handleChangeFile}
            />
          )}
        </form>
        {/*index === 5 && <VerificationPhone/> */}
        
       
        
      </MainContainer>
    </MainContainer>
  );
};

export default AdvertisePageRent;
