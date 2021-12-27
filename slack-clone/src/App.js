import React from 'react';
// import { Counter } from './features/counter/Counter';
import Homepage from './components/Homepage'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
