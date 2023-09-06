import "./App.css";
import { Home } from "./pages/Home/Home";
import Topbar from "./components/main/topbar/Topbar";
import { useState } from "react";
import Footer from "./components/main/footer/Bottom";
import { useTranslation } from "react-i18next";
import LoginPage from "./pages/LoginAndSignup/LoginPage";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import ConfirmLoginOne from "./components/login/ConfirmLogin";
import ConfirmLoginTwo from "./components/login/ConfirmLogin2";
import ConfirmPassOne from "./components/login/ConfirmPassOne";
import ConfirmPassTwo from "./components/login/ConfirmPassTwo";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MapSearchPage from "./pages/search/MapSearchPage";
import ProductInfoPage from "./pages/search/ProductInfoPage";
import Slider from "./components/helper/Slider";
import AdvertisePageRent from "./pages/advertise/AdvertisePageRent";
import AdvertisePageSale from "./pages/advertise/AdvertisePageSale";
import ProfilePage from "./pages/user/ProfilePage";
import AdvertisementPage from "./pages/user/AdvertisementPage";
import NotificationPage from "./pages/user/NotificationPage";
import TermsPage from "./pages/footerLinks/TermsPage";
import PrivacyPage from "./pages/footerLinks/PrivacyPage";
import AboutUsPage from "./pages/footerLinks/AboutUs";
import FavoritesPage from "./pages/footerLinks/FavoritesPage";
import ContactUsPage from "./pages/footerLinks/ContactUs";
import FQAPage from "./pages/footerLinks/FQAPage";



function App() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState("en");

  const handelChangeLang = (e) => {
    i18n.changeLanguage(lang === "en" ? "ar" : "en");
    setLang(lang === "en" ? "ar" : "en");
  };
  console.log(lang);
  return (
    <div
      className="App"
      dir={lang === "en" ? "ltr" : "rtl"}
      lang={lang === "en" ? "en" : "ar"}
    >
      <BrowserRouter>
      <Topbar lang={lang} handelChangeLang={handelChangeLang} />
      <Routes className="routs">
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage component = {<Login/>}/>} />
      <Route path="signup" element={<LoginPage component = {<Signup/>}/>} />
      <Route path="forgetPass" element={<LoginPage component = {<ConfirmPassTwo/>}/>} />
      <Route path="confirmPass" element={<LoginPage component = {<ConfirmLoginTwo/>}/>} />
      <Route path="search" element= {<MapSearchPage/>} />
      <Route path="productInfo" element= {<ProductInfoPage/>} />
      <Route path="slider" element= {<Slider/>} />
      <Route path="advertise/rent" element= {<AdvertisePageRent/>} />
      <Route path="advertise/sale" element= {<AdvertisePageSale/>} />
      <Route path="profile" element= {<ProfilePage/>} />
      <Route path="advertisement" element= {<AdvertisementPage/>} />
      <Route path="notification" element= {<NotificationPage/>} />
      <Route path="terms" element= {<TermsPage/>} />
      <Route path="privacy" element= {<PrivacyPage/>} />
      <Route path="about" element= {<AboutUsPage/>} />
      <Route path="favorite" element= {<FavoritesPage/>} />
      <Route path="contactUs" element= {<ContactUsPage/>} />
      <Route path="fqa" element= {<FQAPage/>} />
      </Routes>
    
      <Footer lang={lang} />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
