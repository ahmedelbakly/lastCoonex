import React from "react";
import styled from "styled-components";
import product from "../../images/product.png";
import avatar from "../../images/avatar.png";
import { MdFavorite,MdEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import Card from "../helper/Card";
import Swiper from "../helper/swiper/Swiper";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const ProductInfo = ({ cardWidth }) => {
  const ProductImg = styled.div`
    width: 100%;
    height: 550px;
    margin-bottom: 50px;
    & .imgContainer {
      width: 100%;
      height: 550px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      & .big {
        width: 40%;
        height: 550px;
        & img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
      }
      & .small {
        width: calc(100% - 41%);
        height: 550px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        align-content: space-between;

        & img {
          width: 32%;
          height: 31.7%;
          border-radius: 7px;
          gap: 20%;
        }
      }
    }
  `;

  const ProductContainer = styled.div`
    & .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      & .leftContainer {
        /* height: 600px; */
        width: 60.1%;
        padding-right: 2%;
        /* background: green; */
        /* border: 3px solid black; */
        & .name-fav {
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
          & p {
            font-size: 18px;
            font-weight: 500;
            color: #3d3d3d;
          }
        }
        & .address {
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 5px;
          gap: 10px;
          margin-bottom: 20px;
          & p {
            text-transform: capitalize;
            font-weight: 400;
            font-size: 14px;
            color: #3d3d3d;
          }
        }

        & .description {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          border-bottom: 2px solid #e2e2e2b3;
          & .title {
            margin-bottom: 20px;
          }
          & p {
            margin-bottom: 30px;
          }
        }

        & .Property-Info {
          margin-top: 30px;
          border-bottom: 2px solid #e2e2e2b3;
          margin-bottom: 30px;

          & h3 {
            color: #3d3d3d;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
          }

          & .data-con {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;

            & ul {
              width: 45%;
              display: flex;
              justify-content: space-between;
              /* align-content:flex-start; */
              height: 100%;

              flex-direction: column;
              & li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                & p {
                  text-align: left;
                  &:first-child {
                    color: #3d3d3d;
                    width: 60%;
                    font-size: 16px;
                    font-weight: 400;

                    text-align: left;
                  }
                  &:nth-child(2) {
                    color: #3d3d3d;
                    width: 35%;
                    font-size: 10px;
                    font-weight: 600;
                    text-align: left;
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
        & .Validated {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          p {
            & :first-child {
              color: var(--black, #3d3d3d);
              font-size: 20px;
              font-weight: 500;
              text-transform: capitalize;
            }
            &:nth-child(2) {
              color: var(--black, #3d3d3d);
              font-size: 20px;
              font-weight: 600;
            }
          }
        }
        & .extra-information {
          display: block;
          color: #ca1e1e;
          font-size: 20px;
          font-weight: 500;
          text-transform: capitalize;
          border-top: 2px solid #e2e2e2b3;
          padding-top: 30px;
          margin-bottom: 30px;
        }
        & .location {
          margin-top: 30px;
          margin-bottom: 30px;
          border-top: 2px solid #e2e2e2b3;
          & h3 {
            color: #3d3d3d;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
            margin-top: 30px;
          }
          & .mapCon {
            height: 220px;
            /* background: red; */
            border: #ca1e1e 3px solid;
            /* margin-bottom: 30px; */
          }
        }
      }

      & .rightContainer {
        width: 38.72%;

        height: 600px;
        /* border: 3px solid black; */
        & .contact {
          border-radius: 10px;
          border: 1px solid #e2e2e2;
          background: #fff;
          padding: 0px 5%;
          padding-top: 5%;
          & .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e2e2;
            & .priceText {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              & p {
                color: #3d3d3d;
                font-size: 18px;
                font-weight: 500;
              }
            }
            & p {
              color: #3d3d3d;
              font-size: 20px;
              font-weight: 600;
            }
          }
          & .nameAvatar {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
            gap: 10px;
            & p {
              color: #3d3d3d;
              font-size: 18px;
              font-weight: 400;
            }
            & img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
          & button {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            padding: 6px 0px;
            background: #fff;
            border: 2px solid #199956;
            gap: 5px;
            font-size: 18px;
            font-weight: 600;
            color: #199956;

            &:hover {
              background: #199956;
              color: white;
            }
          }
          & .issue {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 1px solid #e2e2e2;
            border-top: 1px solid #e2e2e2;
            border-bottom: 1px solid #e2e2e2;
            padding: 20px 0px;
            & p {
              color: #3d3d3d;
              font-weight: 600;
            }
            & a {
              color: #199956;
              font-weight: 600;

              text-decoration-line: underline;
            }
          }
          & .Social {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding: 10px 0px;
            & p {
              color: #3d3d3d;

              font-weight: 600;
            }
            & .icons {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
            }
          }
        }
        & form {
          padding: 5% 5% 0% 5%;
          border-radius: 10px;
          border: 1px solid #e2e2e2;
          background: #fff;
          & h3 {
            color: #3d3d3d;
            font-weight: 600;
            text-align: center;
          }
          & .textArea {
           width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 30px;
            & label {
              display: block;
              font-weight: 600;
            }
            & textarea {
              display: block;
              width: 100%;
            }
          }


           & button { width: 100%;
            height: 100%;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            padding: 6px 0px;
            background: #fff;
            border: 2px solid #199956;
            gap: 5px;
            font-size: 18px;
            font-weight: 600;
            color: #199956;

            &:hover {
              background: #199956;
              color: white;
            }
          
          }
          & .checkRobot {
            width: 100%;
            background: #F7F7F7;
            margin-bottom: 30px;
            border-radius: 10px;
            height: 84px;

          }
        }
      }
    }

    & .recommended {
      margin-bottom: 20px;
      & h3 {
        color: var(--black, #3d3d3d);
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      & .recommendedCon {
        height: 470px;
        /* background: #000; */
        display: flex;
        justify-content: space-between;
      }
    }
    & .recTitle {
      color: var(--black, #3d3d3d);
      font-size: 26px;
      font-weight: 600;
      text-align: center;
      /* margin-top: 30px; */
      margin-bottom: 10px;
    }
  `;

  return (
    <ProductContainer>
      <ProductImg>
        <div className="imgContainer">
          <div className="big">
            <img src={product} alt="" />
          </div>
          <div className="small">
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
            <img src={product} alt="" />
          </div>
        </div>
      </ProductImg>

      <div className="content">
        <div className="leftContainer">
          <div className="name-fav">
            <p>House on the hollywood</p>
            <MdFavorite color="#199956" fontSize="20px" />
          </div>
          <div className="address">
            <BiMap fontSize="20px" />
            <p>9HC3+JHH Doha, Qata</p>
          </div>
          <div className="description">
            <h3 className="title">Description</h3>
            <p>
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
              Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
              Curabitur this is a text link libero tempus congue.
            </p>
            <p>
              Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
              sagittis dolor sed mi elementum pretium. Donec et justo ante.
              Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Integer tristique elit lobortis purus bibendum,
              quis dictum metus mattis. Phasellus posuere felis sed eros.
            </p>
          </div>
          <div className="Property-Info">
            <h3>Property Information</h3>
            <div className="data-con">
              <ul>
                <li>
                  <p>City:</p>
                  <p>Alexandria</p>
                </li>
                <li>
                  <p>Baths:</p>
                  <p>2 bath</p>
                </li>
                <li>
                  <p>Floor:</p>
                  <p>2nd</p>
                </li>
                <li>
                  <p>Furnished / Unfurnished:</p>
                  <p>Semi furnished</p>
                </li>
                <li>
                  <p>Status:</p>
                  <p>for Rent</p>
                </li>
                <li>
                  <p>Payment Method:</p>
                  <p>Cash</p>
                </li>
              </ul>

              {/* //////////////////////////////////////////////////////////////////////////// */}
              <ul>
                <li>
                  <p>Surface area:</p>
                  <p>500 sqft</p>
                </li>
                <li>
                  <p>Rooms:</p>
                  <p>5 rooms</p>
                </li>
                <li>
                  <p>Building Age:</p>
                  <p>2009</p>
                </li>
                <li>
                  <p>Lister Type:</p>
                  <p>2009</p>
                </li>
                <li>
                  <p>Property Mortgaged ?:</p>
                  <p>No</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="Validated">
            <p>Validated information</p>
            <p>A project by mountain View</p>
          </div>
          <a href="/" className="extra-information">
            Extra information{" "}
          </a>
          <div className="location">
            <h3>location</h3>
            <div className="mapCon"></div>
          </div>
        </div>

        <div className="rightContainer">
          <div className="contact">
            <div className="price">
              <div className="priceText">
                <p>icon</p>
                <p>price</p>
              </div>
              <p>800,000 AED</p>
            </div>
            <div className="nameAvatar">
              <img src={avatar} alt="" />
              <p>Shabaan Hossam</p>
            </div>
            <button>
              <MdCall />
              <p>Call now</p>
            </button>
            <button>
              <FaWhatsapp />
              <p>Whats app</p>
            </button>
            <div className="issue">
              <p>Is there an issue?</p>
              <a href="/">Report this ad now</a>
            </div>
            <div className="Social">
              <p>Social Share:</p>
              <div className="icons">
                <FaFacebook fontSize={"25px"} color="#2751E8" />
                <AiFillLinkedin fontSize={"25px"} color="#3384DE" />
              </div>
            </div>
          </div>
          <form action="">
            <h3>Inquire about the Ad</h3>
            <TextField fieldName="Your Name" type="text" />
            <TextField fieldName="Your Email" type="email" />
            <TextField fieldName="Your Phone" type="tel" />
            <div className="textArea">
              <label>
                Your message:
                <textarea name="postContent" rows={4} cols={90} />
              </label>
            </div>
            <div className="checkRobot">
              <p>I'm not a robot</p>
              <div className="check"></div>
            </div>
            <button type="submit">
              <MdEmail/>
              <p>Inquire Now</p>
            </button>
          </form>
        </div>
      </div>
      <h3 className="recTitle">Recommended for you</h3>
      <Swiper
        array2={[
          <Card width={cardWidth} />,
          <Card width={cardWidth} />,
          <Card width={cardWidth} />,
          <Card width={cardWidth} />,
        ]}
        array1={[]}
      />
    </ProductContainer>
  );
};

export default ProductInfo;

const TextField = ({ fieldName, type }) => {
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

  return (
    <TextFieldCon>
      <p>{fieldName}</p>

      <input type={type} id="" placeholder={fieldName} />
    </TextFieldCon>
  );
};
