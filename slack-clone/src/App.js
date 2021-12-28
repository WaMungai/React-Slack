import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { SideBar } from "./components";
import { auth } from "./firebase";
import { Header } from "./layouts";
import { Home, Login } from "./pages";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <ApploadingContainer>
        <ApploadingContents>
          <img src="" />
          <Spinner name="double-bounce" color="purple" fadeIn="none" />
        </ApploadingContents>
      </ApploadingContainer>
    );
  }
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <SideBar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </BrowserRouter>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const ApploadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const ApploadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
