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
// import Services from "./components/services/Services";

// import backgroundImage from "./assets/girls.png"; // Adjust the path according to your project structure

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
      <div
        className="main-bg text-white"
        style={{
          position: "relative", // Ensure relative positioning for the overlay
          // backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <Navbar />
        <ScrollToTop /> {/* Component to scroll to top on route change */}
        <div className="glass-effect">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddSlotsForm" element={<AddSlotsForm />} />
            <Route path="/GetSlots" element={<GetSlots />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/reset-password/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="/forget-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
