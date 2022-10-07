import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage.js';
import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/signup" element={<SignupPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
