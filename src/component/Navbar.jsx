import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../context/Context.jsx";

const Navbar = () => {
  const { setToken } = useContext(UseContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 
      bg-gradient-to-r from-black via-slate-900 to-black 
      border-b border-gray-800 shadow-lg backdrop-blur-md">

      {/* Logo */}
      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 
        text-transparent bg-clip-text">
        Your Profile
      </h2>

      {/* Right section */}
      <div className="flex items-center gap-4">

        <div className="hidden sm:block text-gray-300 text-sm">
          Welcome Back 🚀
        </div>

        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-xl font-semibold text-white
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:scale-105 transition duration-200 shadow-lg
          hover:shadow-pink-500/30"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;