import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../CSS/UserDetails.css';

const BASE_URL = "https://reqres.in/api";

const UserDetails = ({ users, setUsers }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users?page=${page}`);
        setUsers(response.data.data); 
      } catch (error) {
        alert("Failed to fetch users");
      }
    };
    fetchUsers();
  }, [page, setUsers]); 

  const deleteUser = async (id) => {
    const originalUsers = [...users];

    setUsers(users.filter(user => user.id !== id));

    try {
      await axios.delete(`${BASE_URL}/users/${id}`);
      alert("User Deleted Successfully");
    } catch (error) {
      alert("Delete Failed");
      setUsers(originalUsers);
    }
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-container">
      <h2>User List</h2>
      <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
      
      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id} className="userdetails">
            <img src={user.avatar} alt={user.first_name} className="img" />
            <p>{user.first_name} {user.last_name}</p>
            <Link className="user-edit" to={`/update/${user.id}`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)} className="user-delete">Delete</button>
          </div>
        ))
      )}

      <div className="user-buttons">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>←</button>
        <button onClick={() => setPage(page + 1)} disabled={users.length < 6}>→</button>
      </div>
    </div>
  );
};

export default UserDetails;
