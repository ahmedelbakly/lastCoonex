import React, { useState } from "react";
import "./footer.css";
import MainContainer from "../Container";
import logo from "../../../images/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const Footer = ({lang}) => {
 
  const { i18n, t } = useTranslation();
  return (
    <MainContainer customClass="footer" bg="#F7F7F7" padding = "32px 50px">
      <div className="up">
        <div className="item1">
          <img src={logo} alt="logo" />
          <p>
  {t("bottomText")}
          </p>
        </div>
        <div className="Quick Links  list">
          {" "}
          <p className="p">{t("QuickLinks")}</p>
          <a href="/">{t("home")}</a>
          <a href="/">{t("About")}</a>
          <a href="/">{t("Contact")}</a>
          <a href="/">{t("FAQs")}</a>
        </div>
        <div className="Countries list">
          <p className="p">{t("Countries")}</p>
          <a href="/">{t("SaudiArabia")}</a>
          <a href="/">{t("UAE")}</a>
          <a href="/">{t("Egypt")}</a>
        </div>
        <div className="Support list">
          <p className="p">{t("Support")}</p>
          <a href="/">{t("Help")}</a>
          <a href="/">{t("TermsConditions")}</a>
          <a href="/">{t("Privacy")}</a>
        </div>
        <div className="Subscribe">
          <p className="p">{t("Subscribe")}</p>
          <form>
            <input type="email" name="" id="" placeholder={t("writeEmail")} />
            <button type="submit">
    {lang === "en"?  <BsFillArrowRightSquareFill className="icon" />  : <BsFillArrowLeftSquareFill className="icon" />  }  
            </button>
          </form>
        </div>
      </div>
      <div className="down">
        <p className="copyright">
  
        {t("copyright1")}<span>{t("coonex")}</span>{t("copyright2")}
        </p>
        <div className="social-media">
          <AiFillFacebook className="icon" />
          <AiFillTwitterSquare className="icon" />
          <AiFillInstagram className="icon" />
          <AiFillLinkedin className="icon" />
        </div>
      </div>
    </MainContainer>
  );
};

export default Footer;
