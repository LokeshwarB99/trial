import React, { useState } from "react";
import { URL } from "../App";
const EditEmployee = ({ employee }) => {
  const [description, setDescription] = useState(employee.name);
  const [emp_id, setemp_id] = useState(employee.emp_id);
  const [name, setname] = useState(employee.name);
  const [dob, setdob] = useState(employee.dob);
  const [address, setaddress] = useState(employee.address);
  const [salary, setsalary] = useState(employee.salary);

  function setDetails(emp_id, name, dob, address, salary) {
    setemp_id(emp_id);
    setaddress(address);
    setname(name);
    setdob(dob);
    setsalary(salary);
    setDescription(name);
  }

  // Update values

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { emp_id, name, dob, address, salary };
      const response = await fetch(`${URL}${employee.serial_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${employee.serial_id}`}
        onClick={() =>
          setDetails(
            employee.emp_id,
            employee.name,
            employee.dob,
            employee.address,
            employee.salary
          )
        }
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${employee.serial_id}`}
        onClick={() =>
          setDetails(
            employee.emp_id,
            employee.name,
            employee.dob,
            employee.address,
            employee.salary
          )
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Details...</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <h5>Employee_id</h5>
              <input
                className="form-control"
                type="text"
                value={emp_id}
                onChange={(e) => setemp_id(e.target.value)}
              />
              <h5>Name</h5>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <h5>D.O.B.</h5>
              <input
                className="form-control"
                type="text"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              />
              <h5>Address</h5>
              <input
                className="form-control"
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              <h5>Salary</h5>
              <input
                className="form-control"
                type="text"
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() =>
                  setDetails(
                    employee.emp_id,
                    employee.name,
                    employee.dob,
                    employee.address,
                    employee.salary
                  )
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
