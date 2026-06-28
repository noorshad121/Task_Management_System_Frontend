import React, { useContext, useState } from "react";
import axios from "axios";
import { UseContext } from "../context/Context.jsx";

const Create = ({ getData }) => {
  const [title, setTitle] = useState("");
  const { api, token } = useContext(UseContext);

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        `${api}/product/create`,
        { task: title },
        {
          headers: { token }
        }
      );

      setTitle("");
      getData();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      className="w-full flex justify-center bg-black"
      style={{ marginTop: 0, padding: "50px" }}
    >
      <form
        onSubmit={handleForm}
        className="w-[90%] max-w-xl flex gap-3 p-5 rounded-2xl
        bg-black/80 backdrop-blur-xl
        border border-gray-800
        shadow-[0_0_25px_rgba(236,72,153,0.15)]"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="✨ Enter your task..."
          className="flex-1 px-4 py-3 rounded-xl
          bg-gray-900 text-white
          border border-gray-700
          focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:scale-105 transition shadow-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;