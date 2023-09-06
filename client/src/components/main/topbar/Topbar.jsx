import React from "react";
import "./topbar.css";
import logo from "../../../images/logo.png";
import { GrFavorite } from "react-icons/gr";
import { FcAdvertising } from "react-icons/fc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import MainButton from "../../helper/MainButton";
import MainContainer from "../Container";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";


const Topbar = ({ lang, handelChangeLang }) => {
  const { i18n, t } = useTranslation();
  return (
    <MainContainer customClass="topbar-container" padding="32px 50px">
      <div className="up">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="with-icon">
          <div className="icon">
            <GrFavorite />
            <a href="/"> {t("Favorites")}</a>
          </div>
          <div className="icon">
            <FcAdvertising />
            <a href="/">{t("myAds")}</a>
          </div>
          <div className="icon">
            <IoIosNotificationsOutline />
            <a href="/">{t("notifications")}</a>
          </div>
        </div>
        <div className="buttons">
          <div className="lang">
            <button onClick={handelChangeLang}>
              {" "}
              <TfiWorld />
            </button>{" "}
            <p>{lang}</p>
          </div>
          <MainButton text={t("loginButton")} padding="5px 20px" size="20px" />
          <MainButton text={t("adsButton")} padding="5px 20px" size="20px" />
        </div>
      </div>
      <div className="down">
        <a href="/">{t("ResidentialRent")}</a>
        <a href="/">{t("ResidentialScale")}</a>
        <a href="/">{t("CommercialRent")}</a>
        <a href="/">{t("CommercialScale")}</a>
        <a href="/">{t("Contact")}</a>
      </div>
    </MainContainer>
  );
};

export default Topbar;
