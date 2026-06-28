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
        { headers: { token } }
      );

      setTitle("");
      getData();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full flex justify-center bg-black px-4 py-8">
      <form
        onSubmit={handleForm}
        className="
          w-full max-w-xl
          flex flex-col sm:flex-row
          gap-3

          p-4 sm:p-5
          rounded-2xl

          bg-black/80 backdrop-blur-xl
          border border-gray-800
          shadow-[0_0_25px_rgba(236,72,153,0.15)]
        "
      >
        {/* INPUT WRAPPER FIX */}
        <div className="flex-1 min-w-0">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="✨ Enter your task..."
            className="
              w-full
              px-4 py-3
              rounded-xl

              bg-gray-900 text-white
              border border-gray-700

              focus:outline-none focus:ring-2 focus:ring-pink-500

              text-sm sm:text-base
            "
          />
        </div>

        {/* BUTTON SAFE WRAP */}
        <button
          type="submit"
          className="
            w-full sm:w-auto
            shrink-0

            px-6 py-3
            rounded-xl

            font-semibold text-white

            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            hover:scale-105 transition

            shadow-lg

            text-sm sm:text-base
          "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;