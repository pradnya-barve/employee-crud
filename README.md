# Employee CRUD Application

This project is a React-based CRUD application that allows users to manage employee data. The application features the ability to view a list of employees, view details of a specific employee, and add or delete employee records. It uses MongoDB Atlas and CosmosDB for the backend.

## Features

- **Employee Listing Page**: View all employees in a list with options to view details and delete records.
- **Employee Details Page**: View detailed information about a specific employee.
- **Add Employee Page**: Add a new employee to the system.

## Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- Access to a MongoDB Atlas and CosmosDB account (for API setup)

## Setup

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/employee-crud.git
cd employee-crud
```

### 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Configure API Endpoints

Update the `src/api/axiosConfig.js` file with your actual API endpoints and headers:

```javascript
// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://free-centralindia.cosmocloud.io/development/api/employeedb', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
    'projectId': 'your_project_id', // Replace with your actual projectId
    'environmentId': 'your_environment_id', // Replace with your actual environmentId
  },
});

export const getEmployees = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response.data.data; // Extract data from response
  } catch (error) {
    console.error('Error fetching employees:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Other API functions...

export default axiosInstance;
```

### 4. Start the Application

Run the application locally using:

```bash
npm start
```

This will start the development server and open the application in your default web browser at `http://localhost:3000`.

### 5. Test the API Endpoints

To verify that the API endpoints are working correctly:

- Use [Postman](https://www.postman.com/) or a similar tool to test the API endpoints manually.
- Ensure that the API headers and request formats are correct.

### 6. Troubleshooting

If you encounter issues:

- **Check Console Logs**: Review the browser console and network tabs for error messages.
- **Verify Configuration**: Ensure API URLs and headers are correct in `axiosConfig.js`.
- **Consult API Documentation**: Refer to the API documentation for detailed requirements and endpoint information.

### 7. Additional Information

For further details on the project setup or to contribute:

- **Project Documentation**: [Project Documentation](https://docs.cosmocloud.io)
- **Contributing**: Open issues or submit pull requests on the [GitHub repository](https://github.com/yourusername/employee-crud).
- Make sure to replace placeholder values (e.g., `your_project_id`, `your_environment_id`, `yourusername`) with actual information relevant to your project and setup.
