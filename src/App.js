import React from "react";
/* == Import Routes == */
import { Route, Routes } from "react-router-dom";

/* == Import Layouts Components == */
import Header from "./Layouts/Header";

/* == Import Pages Components == */
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
