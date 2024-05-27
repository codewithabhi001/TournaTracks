import React, { useEffect, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Adding a delay to ensure that the scroll animation occurs after new content is loaded
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

const App = () => {
  const [key, setKey] = useState(""); // State to track route changes for AnimatePresence

  return (
    <Router>
      <div className="bg-gradient-to-r from-purple-900 via-black to-blue-900">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={key} // Using key to trigger route change animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollToTop /> {/* Component to scroll to top on route change */}
            <Routes>
              <Route path="/" element={<Home setKey={setKey} />} />{" "}
              {/* Pass setKey function to Home component */}
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
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
