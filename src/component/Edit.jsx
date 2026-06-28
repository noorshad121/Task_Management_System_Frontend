import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseContext } from "../context/Context";
import axios from "axios";

const Edit = () => {
  const { token, api } = useContext(UseContext);
  const [data, setData] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // 🔥 GET SINGLE TASK
  const getData = async () => {
    try {
      const res = await axios.get(
        `${api}/product/get/${id}`,
        {
          headers: { token }
        }
      );

      console.log("GET response:", res.data);

      // SAFE SET (no crash)
      setData(res.data.task ||"");
      
    } catch (err) {
      console.log("GET error:", err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  // 🔥 UPDATE TASK
  const handleEdit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `${api}/product/update/${id}`, // ✅ FIXED ROUTE
        { task: data },
        {
          headers: { token }
        }
      );

      alert("Task updated successfully 🚀");
      navigate("/");
    } catch (err) {
      console.log("UPDATE error:", err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form
        onSubmit={handleEdit}
        className="bg-gray-900 p-6 rounded-xl w-80 shadow-lg border border-gray-700"
      >
        <h2 className="text-white text-xl mb-4 text-center font-semibold">
          Edit Task
        </h2>

        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Edit task..."
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full mt-4 py-2 rounded-lg font-semibold text-white
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:scale-105 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;