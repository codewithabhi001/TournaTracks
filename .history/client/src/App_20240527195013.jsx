import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AddSlotsForm from "./components/AddSlotsForm/AddSlotsForm";
import GetSlots from "./components/getSlots/GetSlots";
import Home from "./components/Home/Home";
import styled from "styled-components";

const SmoothScrollWrapper = styled.div`
  .content-wrapper {
    min-height: 100vh; /* Set minimum height to fill the viewport */
    position: relative;
    overflow: auto; /* Enable scrolling */
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }

  .footer {
    position: fixed; /* Fixed position at the bottom */
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
  }
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <SmoothScrollWrapper>
        <div className="content-wrapper">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddSlotsForm" element={<AddSlotsForm />} />
            <Route path="/GetSlots" element={<GetSlots />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
          </Routes>
          <Footer className="footer" />
        </div>
      </SmoothScrollWrapper>
    </Router>
  );
};

export default App;
