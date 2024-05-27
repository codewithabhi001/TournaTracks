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
import styled from "styled-components"; // Import styled-components

// Define styled component for smooth scrolling
const SmoothScrollWrapper = styled.div`
  scroll-behavior: smooth;
  transition: transform 0.3s ease-in-out;
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
  return (
    <Router>
      <SmoothScrollWrapper className="bg-gradient-to-r from-purple-900 via-black to-blue-900">
        <Navbar />
        <ScrollToTop /> {/* Component to scroll to top on route change */}
        <Routes>
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
