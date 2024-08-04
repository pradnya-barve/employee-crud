import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../api/axiosConfig';
import './styles.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      console.log('Fetched employees:', data);

      if (Array.isArray(data)) {
        setEmployees(data);
      } else if (data?.data && Array.isArray(data.data)) {
        setEmployees(data.data);
      } else {
        throw new Error('Unexpected data format');
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
      setError('Failed to fetch employees');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
      setSuccessMessage('Deleted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); 
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard">
      <div className="employee-container">
        <div className="header">
          <h1>Employee List</h1>
          <Link to="/add" className="add-employee-button" style={{color:"white"}}>+ Add Employee</Link>
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {employees?.length === 0 ? (
          <p>No Employees in the system</p>
        ) : (
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id}>
                  <td>
                    <Link to={`/employee/${employee._id}`}>
                      {employee.name}
                    </Link>
                  </td>
                  <td>{employee._id}</td>
                  <td>
                    <button onClick={() => handleDelete(employee._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;