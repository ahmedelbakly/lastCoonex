import React from "react";
import styled from "styled-components"
import card from "../../images/card.png";
import avatar from "../../images/avatar.png";
import { MdFavorite } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { PiBedDuotone } from "react-icons/pi";
import { PiBathtubThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import {  useParams } from 'react-router-dom';
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    height: 470px;
    box-shadow: 0px 2px 15px 0px gray;
    border-radius: 10px;

    & .img {
      width: 100%;
      height: 255px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & .card-data {
      width: 100%;
      height: Calc(473px - 254px);
      background: #fff;
      border-radius: 10px;
      padding:  20px;

      & .name-fav {
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        & p {
          font-size: 18px;
          font-weight: 500;
          color: #3d3d3d;
          text-transform: capitalize;
          font-weight: 600;
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
      & .info {
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #e2e2e2;
        & .disc {
          width: 50%;
          height: max-content;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
          & p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
          }
        }
        & .price {
          width: 50%;
          height: max-content;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          & p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 3px;
            color: #3d3d3d;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 18px;
          }
        }
      }
      & .avatar {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 12px;
        & .userAndAva {
          display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        }
        & p {
          font-weight: 600;
          font-size: 14px;
          color:#6449E7;
        }
      }
    }
  `;
const Card = ({width,title,cardId}) => {
  let { id } = useParams();

  const proId = "fh6f+hfh8fh8+9+fgasss"
  const navigate =  useNavigate()
  const handleLink = (nav)=>{
    navigate(nav);
  }
  

  return (
    <CardContainer onClick={()=>handleLink(`/productInfo/${cardId ? cardId : proId}`)} className="card" style={{width:width}}>
      <div className="img">
        <img src={card} alt="" />
      </div>
      <div className="card-data">
        <div className="name-fav">
          <p>{ title ? title : "House on the hollywood"}</p>
          <MdFavorite color="#199956" fontSize="20px" />
        </div>
        <div className="address">
          <BiMap fontSize="20px" />
          <p>9HC3+JHH Doha, Qata</p>
        </div>
        <div className="info">
          <div className="disc">
            <p>
              <PiBedDuotone />
              <span>6</span>
            </p>
            <p>
              <PiBathtubThin />
              <span>3</span>
            </p>
          </div>
          <div className="price">
            <p>800,000 AED</p>
          </div>
        </div>
        <div className="avatar">
         <div className="userAndAva">
         <img src={avatar} alt="" />
         <p>ahmed elbakly</p>
         </div>
          <p>Villa</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
