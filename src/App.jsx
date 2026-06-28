import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import { UseContext } from "./context/Context.jsx";
import Edit from "./component/Edit.jsx";

const App = () => {
  const { token } = useContext(UseContext);

  return (
    <div>
      {token ? <Navbar /> : null}

      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />

        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/get/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;