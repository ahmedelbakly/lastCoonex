import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { logOutUser, loginUser } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .inputCon {
      width: 50%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 30px;
      & .btnCon {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
      }
    }
  `;
const AddAvatarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.userInfo);
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);
    formData.append("id", localStorage.getItem("coonexUId"));
    axios
      .post("http://localhost:3001/user/avatar", formData)
      .then((res) => {
        const data = res.data;
        dispatch(loginUser(data));
        navigate("/profile")
      }).catch((err) => console.error(err));
    setFile("");
  };

  
  return (
    <Container>
      <form className="inputCon" onSubmit={handleUpload}>
        <input type="file" name="file" id="" onChange={handleChange} />
        <div className="btnCon">
          <button type="submit">upload</button>
          <Link to="/profile">cancel</Link>
        </div>
      </form>
    </Container>
  );
};

export default AddAvatarPage;
