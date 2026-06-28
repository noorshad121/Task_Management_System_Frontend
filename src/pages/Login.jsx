import React, { useContext } from "react";
import { UseContext } from "../context/Context.jsx";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const { api, loginUser, setLoginUser, setToken } =
    useContext(UseContext);

    const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        `${api}/user/login`,
        loginUser
      );

      // 🔥 save token
      setToken(res.data.token);
       navigate("/");
      // reset form
      setLoginUser({
        email: "",
        password: ""
      });

    } catch (err) {
      console.log(
        "login err:",
        err.response?.data?.message || err.message
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        <p className="text-center text-sm text-gray-500 mb-6">
          Login to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginUser.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginUser.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;