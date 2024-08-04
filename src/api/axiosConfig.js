import { ObjectId } from 'bson';

const LIMIT = 1000;
const OFFSET = 0;

var headers = {
  'Content-Type': 'application/json',
  'projectId': '66ab2c8300af110a2a57a49d',
  'environmentId': '66ab2c8300af110a2a57a49e',
};


// Function to fetch list of employees in database
export async function getEmployees() {
  try {
    const response = await fetch(
      `https://free-centralindia.cosmocloud.io/development/api/employeedb?limit=${LIMIT}&offset=${OFFSET}`,
      { headers }
    );
    return response.json();

  } catch (error) {
    console.error('Error:', error);
  }

}


// function fetch employee details using id
export const getEmployeeById = async (id) => {
  try {
    const url = `https://free-centralindia.cosmocloud.io/development/api/employeedb/${id}`;
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching employee details:', error);
    throw error;
  }
};


// function to add employee to database
export async function addEmployee(data) {
  const emp_id = data.emp_id || new ObjectId().toHexString();

  const rawData = JSON.stringify({
    "emp_id": emp_id,
    "name": data.name,
    "address": data.address,
    "city": data.city,
    "country": data.country,
    "zip_code": data.zip_code,
    "email": data.email,
    "phone_no": data.phone
  });


  const requestOptions = {
    method: "POST",
    headers: headers,
    body: rawData,
    redirect: "follow"
  };

  fetch("https://free-centralindia.cosmocloud.io/development/api/employeedb", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}


// function to delete employee from database
export const deleteEmployee = async (id) => {
  try {
    const url = `https://free-centralindia.cosmocloud.io/development/api/employeedb/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        ...headers, 
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};