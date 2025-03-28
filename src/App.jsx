import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Details/Login";
import UserDetails from "./Details/UserDetails";
import UpdateDetails from "./Details/UpdateDetails";

const App = () => {
  const [users, setUsers] = useState([]); 

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<UserDetails users={users} setUsers={setUsers} />} />
      <Route path="/update/:id" element={<UpdateDetails setUsers={setUsers} />} /> 
    </Routes>
  );
};

export default App;
