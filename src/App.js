import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
