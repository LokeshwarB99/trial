import React, { useEffect, useState } from "react";
import { URL } from "../App";

const InputEmployee = () => {
  // const [description, setDescription] = useState("");

  const [emp_id, setEmp_id] = useState("")
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [address, setaddress] = useState("");
  const [salary, setsalary] = useState("");

  const test = async () => {
    try {
      const response = await fetch(
        `${URL}/test`
      );
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmitForm = async (e) => {
    
    e.preventDefault();
    try {
      window.location = "/";
      const body = { emp_id, name, dob, address, salary };
      const response = await fetch(`${URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Employee Database</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mx-2"
          value={emp_id}
          onChange={(e) => setEmp_id(e.target.value)}
          placeholder="Employee id"
        />
        <input
          type="text"
          className="form-control mx-2"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Name"
        />
        <input
          type="date"
          className="form-control datetimepicker-input mx-2"
          value={dob}
          onChange={(e) => setdob(e.target.value)}
          placeholder="dob"
        />
        <input
          type="text"
          className="form-control mx-2"
          data-provide="datepicker"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          placeholder="address"
        />
        <input
          type="text"
          className="form-control mx-2"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
          placeholder="salary"
        />
        <button className="btn btn-success mx-2">Add</button>
      </form>
      <button onClick={test} className="mt-2 btn btn-danger mx-2">
        Test
      </button>
    </>
  );
};

export default InputEmployee;
