import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/UpdateDetails.css';

const UpdateDetails = ({ setUsers }) => {  
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(res => {
        setValues({
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
          email: res.data.data.email
        });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user data.');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.first_name || !values.last_name || !values.email) {
      alert("Please fill in all fields before updating.");
      return;
    }

    try {
      await axios.put(`https://reqres.in/api/users/${id}`, values);
      alert("User updated successfully!");

      
      axios.get("https://reqres.in/api/users?page=1")
        .then(res => setUsers(res.data.data))  
        .catch(err => console.error("Failed to fetch users", err));

      navigate("/users");
    } catch (error) {
      alert("Update failed. Please try again.");
    }
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="update-details">
        <h2>Edit User</h2>
        
        <label>First Name:</label>
        <input type="text" value={values.first_name} onChange={(e) => setValues({...values, first_name: e.target.value})} />

        <label>Last Name:</label>
        <input type="text" value={values.last_name} onChange={(e) => setValues({...values, last_name: e.target.value})} />

        <label>Email:</label>
        <input type="email" value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} />
        
        <button type="submit" className="update-btn">Update</button>
        <button type="button" onClick={() => navigate("/users")} className='cancel-btn'>Cancel</button>
      </div>
    </form>
  );
};

export default UpdateDetails;
