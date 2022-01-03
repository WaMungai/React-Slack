import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider);
  };
  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTp8YdRXZsud_pJ4CiCYnoN83aXkyEs-VwOcOLx1IudIHcLTmY6-vrSRilqTOepguwUA&usqp=CAU"
            alt=""
          />
          <h1>Sign In</h1>
          <p>Sign In to fake Slack</p>
          <Button type="submit" onClick={signIn}>
            Sign In With Google
          </Button>
        </LoginInnerContainer>
      </LoginContainer>
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  place-items: center;
  display: grid;
  background-color: #f8f8f8;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  > img {
    object-fit: contain;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
