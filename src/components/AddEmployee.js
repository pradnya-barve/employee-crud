import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../api/axiosConfig';
import './AddEmployee.css'; 

const AddEmployee = ({ onAddEmployee }) => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      address,
      city,
      country,
      zip_code: zipCode,
      email,
      phone
    };

    // Attempt to add a new employee using the addEmployee function
    try {
      await addEmployee(newEmployee);
      setSuccessMessage('Employee added successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };
    
  return (
    <form onSubmit={handleSubmit} className="add-employee-form">
      <h1>Add Employee</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
      <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Add Employee</button>
      
    </form>
  );
};

export default AddEmployee;
