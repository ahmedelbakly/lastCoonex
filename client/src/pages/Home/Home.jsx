import React from "react";
import "./home.css";
import MainContainer from "../../components/main/Container";
import Banner from "../../components/home/Banner";
import homesalepaner from "../../images/homesalepaner.png";
import bannerLeft from "../../images/bannerLeft.png";
import SearchBar from "../../components/main/searchBar/SearchBar";
import ItemsContainer from "../../components/helper/itemsContainer/ItemsContainer";
import SubBanner from "../../components/home/SubBanner";
import homeSubBanner from "../../images/homeSubBanner.png";
import homeSubBanner2 from "../../images/homeSubBanner2.png";
import HomeBanner4 from "../../components/home/HomeBanner4";
import HomeBanner3 from "../../components/home/HomeBanne3";

export const Home = () => {
  const buttonsArray = [
    "All",
    "Apartment",
    "Townhouse",
    "Penthouse",
    "Residential Building",
    "Villa Compound",
    "Residential Floor",
  ];
  return (
    <MainContainer customClass="home-page">
      <Banner
        img={homesalepaner}
        height="601px"
        imgRight={""}
        imgLeft={bannerLeft}
        text1=""
        text2=""
        overlay={true}
        topButton="70%"
      >
        <div className="banner-text">
          <h2>The best way to find your happy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt ut labore et dolore{" "}
          </p>
        </div>
        <SearchBar top="85%" />
      </Banner>
      <ItemsContainer text="Residential for rent" buttonsArray={buttonsArray}  cardWidth="32.5%" />
      <ItemsContainer text="Residential for sale" buttonsArray={buttonsArray}  cardWidth="32.5%" />
      <SubBanner img={homeSubBanner} />  
      <ItemsContainer text="Commercial for rent" buttonsArray={buttonsArray}   cardWidth="32.5%"/>
      <ItemsContainer text="Commercial for sale" buttonsArray={buttonsArray}   cardWidth="32.5%"/>
      <SubBanner img={homeSubBanner2} />
      <HomeBanner3 />
      <HomeBanner4 />
    </MainContainer>
  );
};
