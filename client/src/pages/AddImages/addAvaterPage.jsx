import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const AddAvatarPage = () => {
    const [file, setFile] = useState("");

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        console.log(file)
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", file);
        formData.append("id", "64feeecc951e3ead3dc74ac9");
        axios
            .post("http://localhost:3001/user/avatar", formData)
            .then((res) =>console.log(res.data))
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
            setFile("");
    };

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
    return (
        <Container>
            <form className="inputCon" onSubmit={handleUpload}>
                <input type="file" name="file" id="" onChange={handleChange} />
                <div className="btnCon">
                    <button type="submit">upload</button>
                    <Link to="/profile">cancel</Link></div>
            </form>
        </Container>
    );
};

export default AddAvatarPage;
