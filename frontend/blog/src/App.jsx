import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
