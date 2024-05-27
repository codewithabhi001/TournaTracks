import React, { useEffect, useRef } from "react";
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
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Define styled component for smooth scrolling
const SmoothScrollWrapper = styled.div`
  .scroll-container {
    overflow: hidden;
    position: relative;
  }

  .scroll-content {
    position: relative;
    will-change: transform;
    padding-bottom: 250px; /* Adjust footer height */
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px; /* Adjust height as necessary */
    background-color: #333; /* Example background color */
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
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <Router>
      <SmoothScrollWrapper className="bg-gradient-to-r from-purple-900 via-black to-blue-900">
        <div className="scroll-container" ref={scrollRef} data-scroll-container>
          <div className="scroll-content" data-scroll-section>
            <Navbar />
            <ScrollToTop /> {/* Component to scroll to top on route change */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AddSlotsForm" element={<AddSlotsForm />} />
              <Route path="/GetSlots" element={<GetSlots />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route path="/forget-password" element={<ForgotPassword />} />
            </Routes>
            <Footer className="footer" />
          </div>
        </div>
      </SmoothScrollWrapper>
    </Router>
  );
};

export default App;
