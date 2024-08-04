import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById } from '../api/axiosConfig';
import './EmployeeDetails.css';

const EmployeeDetails = () => {
  const { id } = useParams(); 
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        console.log('Fetching employee details for _id:', id);
        const employeeData = await getEmployeeById(id);
        console.log('Fetched employee data:', employeeData);

        if (!employeeData) {
          throw new Error('No employee data returned from getEmployeeById');
        }

        setEmployee(employeeData);
      } catch (error) {
        console.error('Error fetching employee details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching employee details: {error}</div>;
  if (!employee) return <div>No employee found</div>;

  return (
    <div className="employee-details">
    <h1>Employee Details</h1>
    <div className="detail"><strong>Name:</strong> {employee.name}</div>
    <div className="detail"><strong>ID:</strong> {employee._id}</div>
    <div className="detail"><strong>Address:</strong> {employee.address}</div>
    <div className="detail"><strong>City:</strong> {employee.city}</div>
    <div className="detail"><strong>Country:</strong> {employee.country}</div>
    <div className="detail"><strong>Zip Code:</strong> {employee.zip_code}</div>
    <div className="detail"><strong>Email:</strong> {employee.email}</div>
    <div className="detail"><strong>Phone:</strong> {employee.phone_no}</div>
    <button onClick={() => navigate('/')} className="back-button">Back to Employee List</button>
  </div>
  );
};

export default EmployeeDetails;
