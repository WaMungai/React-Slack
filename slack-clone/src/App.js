import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { SideBar } from "./components";
import { auth } from "./firebase";
import { Header } from "./layouts";
import { Home, Login } from "./pages";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      <Header />
      <AppBody>
        <SideBar />
        <BrowserRouter>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          )}
        </BrowserRouter>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
