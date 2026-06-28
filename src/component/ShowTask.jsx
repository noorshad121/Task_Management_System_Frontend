import axios from "axios";
import React, { useContext, useEffect } from "react";
import { UseContext } from "../context/Context";
import { Link } from "react-router-dom";

const ShowTask = ({ tasks, setTasks, getData }) => {
    const {api, token} = useContext(UseContext);

    const handleDelete = async (id)=>{
       await axios.delete(`${api}/product/delete/${id}`,{headers:{token}}) 
       getData();
    }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex justify-center">
      
      <div className="w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Your Tasks
        </h1>

        {/* Empty state */}
        {tasks.length === 0 ? (
          <p className="text-center text-gray-400">No tasks found</p>
        ) : (
          tasks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between
              p-4 mb-3 rounded-xl
              bg-gray-800 border border-gray-700
              hover:bg-gray-700 transition"
            >

              {/* Task */}
              <p className="text-gray-200">{item.task}</p>

              {/* Actions */}
              <div className="flex gap-2">

                {/* EDIT TAG */}
               <Link
                  to={`/get/${item._id}`}
                  className="text-xs px-3 py-1 rounded-full
                  border border-blue-500 text-blue-400
                  hover:bg-blue-500 hover:text-white transition"
                >
                  edit
                </Link>

                {/* DELETE TAG */}
                <button className="text-xs px-3 py-1 rounded-full
                border border-pink-500 text-pink-400
                hover:bg-pink-500 hover:text-white transition"
                 onClick={()=>handleDelete(item._id)} >
                  delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default ShowTask;