import React, { useContext } from "react";
import { UseContext } from "../context/Context.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const { api, registerUser, setRegisterUser, setToken } =
    useContext(UseContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        `${api}/user/register`,
        registerUser
      );

      // 🔥 save token after register
      setToken(res.data.token);

      // reset form
      setRegisterUser({
        name: "",
        email: "",
        password: ""
      });
    } catch (err) {
      console.log("register err:", err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerUser.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerUser.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerUser.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;