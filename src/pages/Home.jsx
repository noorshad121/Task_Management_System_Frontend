import React from 'react'
import Create from '../component/Create.jsx';
import ShowTask from '../component/ShowTask.jsx';
import { UseContext } from '../context/Context.jsx';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
const { api, token } = useContext(UseContext);
   
    
    const [tasks, setTasks] = useState([]);
    const getData = async () => {
        try {
          const res = await axios.get(`${api}/product/get`, {
            headers: {
              token
            }
          });
    
          console.log(res.data);
          setTasks(res.data);
        } catch (err) {
          console.log(err.response?.data || err.message);
        }
      };
    
  return (
    <div>
        <Create getData={getData} />
        <ShowTask tasks={tasks} setTasks={setTasks} getData={getData} />
    </div>
  )
}

export default Home
