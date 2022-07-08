import React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
