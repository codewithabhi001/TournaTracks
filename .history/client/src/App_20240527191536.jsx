import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar/Nav";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AddSlotsForm from "./components/AddSlotsForm/AddSlotsForm";
import GetSlots from "./components/getSlots/GetSlots";
import Home from "./components/Home/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <Router>
      <div className="bg-gradient-to-r from-purple-900 via-black to-blue-900">
        <Navbar />
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            </Route>
            <Route path="/AddSlotsForm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AddSlotsForm />
              </motion.div>
            </Route>
            <Route path="/GetSlots">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GetSlots />
              </motion.div>
            </Route>
            <Route path="/login">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Login />
              </motion.div>
            </Route>
            <Route path="/register">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Register />
              </motion.div>
            </Route>
            <Route path="/reset-password/:token">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ResetPassword />
              </motion.div>
            </Route>
            <Route path="/forget-password">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ForgotPassword />
              </motion.div>
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
