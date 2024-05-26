import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      // Reset form fields after successful submission
      setFormData(initialState);
    } catch (error) {
      console.error("Error creating slots:", error);
      toast.error("Failed to create slots. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col md:flex-row bg-[#000] rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-4xl">
        <div className="p-10 text-white w-full md:w-1/2">
          <h1 className="text-center text-3xl mb-6">Create Slots for Teams</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2" htmlFor="organizationName">
              Organization Name
            </label>
            <input
              className="w-full p-3 mb-4 text-white rounded focus:outline-none"
              type="text"
              id="organizationName"
              placeholder="Enter organization name"
              value={formData.organizationName}
              onChange={(e) =>
                setFormData({ ...formData, organizationName: e.target.value })
              }
              required
            />
            <label className="block mb-2" htmlFor="matchTitle">
              Match Title
            </label>
            <input
              className="w-full p-3 mb-4 text-white rounded focus:outline-none"
              type="text"
              id="matchTitle"
              placeholder="Enter match title"
              value={formData.matchTitle}
              onChange={(e) =>
                setFormData({ ...formData, matchTitle: e.target.value })
              }
              required
            />
            <label className="block mb-2" htmlFor="matchDate">
              Match Date
            </label>
            <input
              className="w-full p-3 mb-4 text-white rounded focus:outline-none"
              type="text"
              id="matchDate"
              placeholder="Enter match date"
              value={formData.matchDate}
              onChange={(e) =>
                setFormData({ ...formData, matchDate: e.target.value })
              }
              required
            />
            <h2 className="text-xl mb-4">Enter Team Names</h2>
            <div className="h-20 overflow-y-auto mb-4 border border-gray-700 rounded p-4">
              {formData.teams.map((team, index) => (
                <div className="mb-2" key={index}>
                  <label className="block mb-1" htmlFor={`team${index + 1}`}>
                    Team {index + 1}
                  </label>
                  <input
                    className="w-full p-1 text-white bg-black rounded focus:outline-none"
                    type="text"
                    id={`team${index + 1}`}
                    placeholder={`Enter team ${index + 1} name`}
                    value={team}
                    onChange={(e) => handleTeamChange(index, e.target.value)}
                    required
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 mb-4"
              onClick={addTeamField}
            >
              Add Team
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105"
            >
              Create Slots
            </button>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-800 border-l-4 border-pink-500 bg-gradient-to-br from-pink-500 to-purple-500">
          <img
            src="Hero3.png"
            alt="Login Illustration"
            className="mb-6 w-3/4"
          />
          <p className="text-center">
            Welcome! Please fill out the form to create slots for your teams.
          </p>
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
