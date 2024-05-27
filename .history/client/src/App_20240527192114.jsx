import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import styled, { keyframes } from "styled-components"; // Import styled-components and keyframes

import Navbar from "./components/Navbar/Nav";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AddSlotsForm from "./components/AddSlotsForm/AddSlotsForm";
import GetSlots from "./components/getSlots/GetSlots";
import Home from "./components/Home/Home";

// Define keyframes for smooth appearing and disappearing
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

// Define styled component for smooth scrolling and animation
const SmoothScrollWrapper = styled.div`
  scroll-behavior: smooth;
  &.fade-in {
    animation: ${fadeIn} 0.5s forwards;
  }
  &.fade-out {
    animation: ${fadeOut} 0.5s forwards;
  }
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(pathname);

  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <Router>
      <SmoothScrollWrapper className="bg-gradient-to-r from-purple-900 via-black to-blue-900">
        <Navbar />
        <ScrollToTop /> {/* Component to scroll to top on route change */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/AddSlotsForm" element={<AddSlotsForm />} />
          <Route path="/GetSlots" element={<GetSlots />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
        </Routes>
      </SmoothScrollWrapper>
      <Footer />
    </Router>
  );
};

export default App;
