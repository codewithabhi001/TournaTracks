import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
// import "./AddSlotsForm.css"; // Assuming you have custom CSS for additional styles

const AddSlotsForm = () => {
  const initialState = {
    organizationName: "",
    matchTitle: "",
    matchDate: "",
    teams: [],
  };

  const [formData, setFormData] = useState(initialState);

  const addTeamField = () => {
    if (formData.teams.length < 25) {
      setFormData({ ...formData, teams: [...formData.teams, ""] });
    } else {
      toast.error("You can only add up to 25 teams.");
    }
  };

  const handleTeamChange = (index, value) => {
    const newTeams = [...formData.teams];
    newTeams[index] = value;
    setFormData({ ...formData, teams: newTeams });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.organizationName ||
      !formData.matchTitle ||
      formData.teams.some((team) => !team)
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/AddSlotsForm",
        formData
      );
      console.log(response.data);
      toast.success("Slots successfully created!");
      setFormData(initialState);
    } catch (error) {
      console.error("Error creating slots:", error);
      toast.error("Failed to create slots. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark p-4">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-4xl bg-transparent">
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center backdrop-blur-md bg-black bg-opacity-50">
          <motion.h1
            className="text-center text-3xl font-bold mb-6 text-neon"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create Slots for Teams
          </motion.h1>
          <form onSubmit={handleSubmit}>
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="organizationName"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Organization Name
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
              type="text"
              id="organizationName"
              placeholder="Enter organization name"
              value={formData.organizationName}
              onChange={(e) =>
                setFormData({ ...formData, organizationName: e.target.value })
              }
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="matchTitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Match Title
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
              type="text"
              id="matchTitle"
              placeholder="Enter match title"
              value={formData.matchTitle}
              onChange={(e) =>
                setFormData({ ...formData, matchTitle: e.target.value })
              }
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="matchDate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Match Date
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
              type="text"
              id="matchDate"
              placeholder="Enter match date"
              value={formData.matchDate}
              onChange={(e) =>
                setFormData({ ...formData, matchDate: e.target.value })
              }
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <h2 className="text-xl mb-4">Enter Team Names</h2>
            <div className="h-40 overflow-y-auto mb-4 border border-gray-700 rounded p-4 neon-input">
              {formData.teams.map((team, index) => (
                <div className="mb-2" key={index}>
                  <motion.label
                    className="block mb-1 text-neon"
                    htmlFor={`team${index + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Team {index + 1}
                  </motion.label>
                  <motion.input
                    className="w-full p-1 text-black rounded focus:outline-none"
                    type="text"
                    id={`team${index + 1}`}
                    placeholder={`Enter team ${index + 1} name`}
                    value={team}
                    onChange={(e) => handleTeamChange(index, e.target.value)}
                    required
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  />
                </div>
              ))}
            </div>
            <motion.button
              type="button"
              className="bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 mb-4 neon-button"
              onClick={addTeamField}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Add Team
            </motion.button>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 neon-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Create Slots
            </motion.button>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-black to-transparent">
          <motion.img
            src="Hero3.png"
            alt="Slots Illustration"
            className="mb-6 w-full max-w-xs md:max-w-sm neon-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.p
            className="text-center text-neon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Welcome! Please fill out the form to create slots for your teams.
          </motion.p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AddSlotsForm;
