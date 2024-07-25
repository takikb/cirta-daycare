import React, { useState, useEffect } from "react";
import axios from "axios";

const PRE_REGISTRATION_START_DATE = new Date("2024-08-15");
const PRE_REGISTRATION_END_DATE = new Date("2024-08-25");

export const Admission = () => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [parentInfo, setParentInfo] = useState({});
  const [childInfo, setChildInfo] = useState({});

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/admission");
        setPrograms(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchPrograms();
  }, []);

  const findProgramById = (id) => {
    return programs.find((program) => program._id === id);
  };

  const handleProgramSelection = (programID) => {
    const foundProgram = findProgramById(programID);

    if (foundProgram.currentCapacity < foundProgram.maxCapacity) {
      setSelectedProgram(programID);
      alert("it works");
    } else {
      alert("the program is full");
    }
  };

  const handleParentInfoChange = (e) => {
    const { name, value } = e.target;
    setParentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChildInfoChange = (e) => {
    const { name, value } = e.target;
    setChildInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitRegistration = async (event) => {
    event.preventDefault();

    try {
      const registrationData = {
        program: selectedProgram,
        parent: parentInfo,
        child: childInfo,
      };

      const response = await axios.post(
        "http://localhost:3001/admission",
        registrationData
      );
      console.log("Registration request submitted: ", response.data);
      alert("Registration request submitted. ");
    } catch (error) {
      console.error("Error submitting registration request:", error.message);
    }
  };

  return (
    <div>
      <h2>Select Program</h2>
      <ul>
        {programs.map((program) => (
          <li
            key={program._id}
            onClick={() => handleProgramSelection(program._id)}
          >
            {program.programName}
          </li>
        ))}
      </ul>
      {selectedProgram && (
        <div>
          <h3>Parent Information</h3>
          <input
            type="text"
            name="parentFirstName"
            placeholder="First Name"
            onChange={handleParentInfoChange}
          />

          <input
            type="text"
            name="parentLastName"
            placeholder="Last Name"
            onChange={handleParentInfoChange}
          />

          <input
            type="email"
            name="parentEmail"
            placeholder="Email"
            onChange={handleParentInfoChange}
          />

          <input
            type="text"
            name="parentPhone"
            placeholder="Phone"
            onChange={handleParentInfoChange}
          />

          <input
            type="text"
            name="parentAddress"
            placeholder="Address"
            onChange={handleParentInfoChange}
          />

          <h3>Child Information</h3>
          <input
            type="text"
            name="childFirstName"
            placeholder="First Name"
            onChange={handleChildInfoChange}
          />

          <input
            type="text"
            name="childLastName"
            placeholder="Last Name"
            onChange={handleChildInfoChange}
          />

          <input
            type="date"
            name="childDateOfBirth"
            placeholder="Date Of Birth"
            onChange={handleChildInfoChange}
          />

          <input
            type="text"
            name="childGender"
            placeholder="Gender"
            onChange={handleChildInfoChange}
          />

          <button onClick={handleSubmitRegistration}>
            Submit Registration Request
          </button>
        </div>
      )}
    </div>
  );
};
