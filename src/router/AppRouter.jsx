import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/navbar/Navbar";
import Details from "../pages/details/Details";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path ="/details" element={<Details/>}/>
        <Route path ="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
