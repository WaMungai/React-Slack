import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Header } from "./layouts";
import { SideBar } from "./components";

import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <SideBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
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
