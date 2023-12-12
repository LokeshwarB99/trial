import React, { useEffect, useState } from "react";
import EditEmployee from './EditEmployee'
import { URL } from "../App";

const ListEmployee = () => {
  const [EmployeeDetails, setEmployeeDetails] = useState([]);

  //Delete Employee funtion
  const deleteEmployee = async (id) => {
    try {
      const deleteEmployee = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });
      setEmployeeDetails(EmployeeDetails.filter((employee) => employee.serial_id !== id));
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  // Display existing EmployeeDetails
  const getEmployeeDetails = async () => {
    try {
      const response = await fetch(`${URL}`);
      const jsonData = await response.json();
      setEmployeeDetails(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  return (
    <>
      <div className="mt-5">
        <h2>Employee Database</h2>{" "}
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>emp_id</th>
              <th>name</th>
              <th>dob</th>
              <th>address</th>
              <th>salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {EmployeeDetails.map((employee) => (
              <tr key={employee.serial_id}>
                <td>{employee.emp_id}</td>
                <td>{employee.name}</td>
                <td>{employee.dob}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>
                  <EditEmployee employee={employee} />
                </td>
                <td>
                  <button
                    onClick={() => deleteEmployee(employee.serial_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListEmployee;
