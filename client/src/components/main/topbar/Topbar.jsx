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
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import AccountMenu from "../menu";
import { logOutUser} from '../../../redux/userSlice';


const Topbar = ({ lang, handelChangeLang }) => {
  const navigate = useNavigate();
 
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const handleLink = (nav) => {
    navigate(nav);
  };

  const handleLogout = ()=>{
   dispatch(logOutUser())
   localStorage.removeItem("token");
   localStorage.removeItem("reToken");
  }
  const { i18n, t } = useTranslation();
  return (
    <MainContainer customClass="topbar-container" padding="32px 50px">
      <div className="up">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => handleLink("/")} />
        </div>

        <div className="with-icon">
          <div className="icon">
            <GrFavorite />
            <Link to="/favorite"> {t("Favorites")}</Link>
          </div>
          <div className="icon">
            <FcAdvertising />
            <Link to="/advertisement">{t("myAds")}</Link>
          </div>
          <div className="icon">
            <IoIosNotificationsOutline />
            <Link to="/notification">{t("notifications")}</Link>
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

          

          { Object.keys(user).length !== 0 ?
          <div className="nameAvatar">
            <Avatar alt="" src={`http://localhost:3001/images/${user.image}`} />
           <AccountMenu username = {user.username} logout={handleLogout} handleLink={handleLink}/>
          </div>
          :
          <MainButton
            text={t("loginButton")}
            padding="5px 20px"
            size="20px"
            click={() => handleLink("/login")}
          /> }
          <MainButton
            text={t("adsButton")}
            padding="5px 20px"
            size="20px"
            click={() => handleLink("/advertisement")}
          />
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

//E:\lastCoonex\server\public\images\avatar.png
