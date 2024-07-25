import "../css/Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import vector from "../images/admissions/Vector.png";
import { Footer } from "./footer";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../compnent/navbar";

const stripePromise = loadStripe(
  "pk_test_51N3N7mBzZpaOtO8UJKQxy6o4Po8DwzywH3GgEE1DM2abSxqa05qtahNkKdzKOYGeCw9glrxt0aUV6cvOs5G5DcOR00fbdqBiZy"
);
export const Admissions = () => {
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [parentInfo, setParentInfo] = useState({});
  const [childInfo, setChildInfo] = useState({});
  const [tuition, setTuition] = useState([]);
  const [idSession, setIdSession] = useState([]);
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
  const [midYear, setMidYear] = useState(false);

  const fetchClientSecret = async (event) => {
    event.preventDefault();
    try {
      setRegistrationSubmitted(false);
      let registrationData = {};
      if (midYear) {
        registrationData = {
          program: selectedProgram,
          parent: parentInfo,
          child: childInfo,
          type: "Mid-year Entry",
        };
      } else {
        registrationData = {
          program: selectedProgram,
          parent: parentInfo,
          child: childInfo,
        };
      }
      localStorage.setItem(
        "registrationData",
        JSON.stringify(registrationData)
      );
      console.log("data ", registrationData);
      const response = await axios.post(
        "http://localhost:3001/admission/create-checkout-session",
        {
          program: selectedProgram,
          parent: parentInfo,
        }
      );
      console.log(response);
      const { sessionId } = response.data;
      setIdSession(sessionId);
      console.log(idSession);
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
      console.log(result);
    } catch (error) {
      console.error("Error fetching client session:", error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    const fetchSessionStatus = async () => {
      if (!sessionId || registrationSubmitted) return;
      try {
        const response = await axios.get(
          `http://localhost:3001/admission/session-status?session_id=${sessionId}`
        );
        console.log("Response data:", response.data);
        const data = response.data;
        console.log(registrationSubmitted);
        console.log(data.status);
        if (data.status === "paid" && !registrationSubmitted) {
          setRegistrationSubmitted(true);
          await handleSubmitRegistration();
          sessionStorage.removeItem("registrationData");
        }
      } catch (error) {
        console.error("Error fetching session status:", error);
        alert(error.response.data.error);
      }
    };
    fetchSessionStatus();
  }, [registrationSubmitted]);

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
      setTuition(foundProgram.tuition);
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

  const handleSubmitRegistration = async () => {
    setRegistrationSubmitted(false);
    try {
      const storedRegistrationData = localStorage.getItem("registrationData");
      const parsedRegistrationData = storedRegistrationData
        ? JSON.parse(storedRegistrationData)
        : null;

      console.log(parsedRegistrationData);
      navigate("/");

      const response = await axios.post(
        "http://localhost:3001/admission",
        parsedRegistrationData
      );

      console.log("Registration request submitted: ", response.data);
    } catch (error) {
      console.error("Error submitting registration request:", error.message);
      alert(
        "Error submitting registration request: ",
        error.response.data.error
      );
    }
  };

  return (
    <>
      <section className="hero adm">
        {window.location.pathname !== "/signup" && <Navbar />}
        <div className="content">
          <h3>CIRTA PRE-SCHOOL</h3>
          <h2 className="titles">ADMISSIONS</h2>
          <p>
            Our admissions process is an invitation for families to get to know
            CIRTA Pre-School through the lens of a student, rather than through
            a series of formal interviews. We welcome parents and children to
            visit classrooms to familiarize themselves with the spaces and faces
            of CIRTA Pre-School.
          </p>
          <div className="butts">
            <a href="#appo" className="on">
              Apply Online
            </a>
            <a href="#" className="mail">
              Apply By Mail
            </a>
          </div>
        </div>
      </section>
      <section className="tuition">
        <div className="wrapper">
          <h3 className="light">SCHOOL YEAR | 2024-2025</h3>
          <h2 className="titles">tuition</h2>
          <div className="table">
            <div className="tato">
              <img src={vector} alt="" />
            </div>
            <div className="fholder">
              <h3 className="mid">Full-year Entry: september 2025-June 2025</h3>
              <div className="mtab">
                <table border="0">
                  <tr>
                    <th>Program (By Age)</th>
                    <th>Days/Times</th>
                    <th>Tuition</th>
                  </tr>
                  <tr>
                    <td>under 2 years old</td>
                    <td>sund/Thurs, 8:30-11:30 or 8:45-11:45</td>
                    <td>$4000</td>
                  </tr>
                  <tr>
                    <td>2s</td>
                    <td>Mon/Wed/Fri, 8:30-11:30 or 8:45-11:45</td>
                    <td>$5000</td>
                  </tr>
                  <tr>
                    <td>2s/3s</td>
                    <td>Mon/Wed/Fri, 8:30-11:30 or 8:45-11:45</td>
                    <td>$6000</td>
                  </tr>
                  <tr>
                    <td>2s/3s & 3s</td>
                    <td>Mon-Fri, 8:30-12:00 or 8:45-12:15</td>
                    <td>$9000</td>
                  </tr>
                  <tr>
                    <td>Older 3s/4s/5s</td>
                    <td>Mon-Fri, 8:30-2:30 or 8:45-2:45</td>
                    <td>$12000</td>
                  </tr>
                </table>
              </div>
            </div>
            <hr></hr>
            <h3 className="mid">Mid-year Entry: January 2025-June 2025</h3>
            <div className="sholder">
              <div className="mtab">
                <table border="1">
                  <tr>
                    <th>Program (By Age)</th>
                    <th>Days/Times</th>
                    <th>Tuition</th>
                  </tr>
                  <tr>
                    <td>under 2 years old</td>
                    <td>sund/Thurs, 8:30-11:30 or 8:45-11:45</td>
                    <td>$2000</td>
                  </tr>
                  <tr>
                    <td>2s</td>
                    <td>Mon/Wed/Fri, 8:30-11:30 or 8:45-11:45</td>
                    <td>$2500</td>
                  </tr>
                  <tr>
                    <td>2s/3s</td>
                    <td>Mon/Wed/Fri, 8:30-11:30 or 8:45-11:45</td>
                    <td>$3000</td>
                  </tr>
                  <tr>
                    <td>2s/3s & 3s</td>
                    <td>Mon-Fri, 8:30-12:00 or 8:45-12:15</td>
                    <td>$4500</td>
                  </tr>
                  <tr>
                    <td>Older 3s/4s/5s</td>
                    <td>Mon-Fri, 8:30-2:30 or 8:45-2:45</td>
                    <td>$6000</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="appo" id="appo">
        <div className="wrapper">
          <h2 className="app">ADMISSIONS APPLICATION</h2>
          <div className="full req">
            <h3 className="apptitle">Please Choose The Wanted Program:</h3>
            <label>
              <input
                type="checkbox"
                value="Mid-year start"
                onChange={(e) => setMidYear(!midYear)}
              />
              Mid-year start (2023-2024)
            </label>
            <br />
            <ul>
              {programs.map((program) => (
                <label>
                  <input
                    key={program._id}
                    type="radio"
                    checked={selectedProgram == program._id}
                    onClick={() => handleProgramSelection(program._id)}
                  />
                  {program.programName}
                  <br />
                </label>
              ))}
            </ul>
            <br />
          </div>
          {selectedProgram && (
            <form className="outer" onSubmit={fetchClientSecret}>
              <div className="inner">
                <div className="full">
                  <h3 className="apptitle">Child’s Name</h3>
                  <div className="hold">
                    <div className="box">
                      <input
                        type="text"
                        name="childFirstName"
                        onChange={handleChildInfoChange}
                      />
                      <p>First</p>
                    </div>
                    <div className="box">
                      <input
                        type="text"
                        name="childLastName"
                        onChange={handleChildInfoChange}
                      />
                      <p>Last</p>
                    </div>
                  </div>
                </div>
                <div className="full two">
                  <div className="half">
                    <h3 className="apptitle">Child’s Date of Birth</h3>
                    <input
                      type="date"
                      name="childDateOfBirth"
                      onChange={handleChildInfoChange}
                      className="date"
                    />
                  </div>
                  <div className="half">
                    <h3 className="apptitle">Child’s Gender</h3>
                    <label>
                      <input
                        type="radio"
                        name="childGender"
                        value="Male"
                        onClick={handleChildInfoChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="childGender"
                        value="Female"
                        onClick={handleChildInfoChange}
                      />
                      Female
                    </label>
                  </div>
                </div>
                <h3 className="big">CHILD'S PARENT</h3>
                <div className="full">
                  <h3 className="apptitle">Parent's Name</h3>
                  <div className="hold">
                    <div className="box">
                      <input
                        type="text"
                        name="parentFirstName"
                        onChange={handleParentInfoChange}
                      />

                      <p>First</p>
                    </div>
                    <div className="box">
                      <input
                        type="text"
                        name="parentLastName"
                        onChange={handleParentInfoChange}
                      />
                      <p>Last</p>
                    </div>
                  </div>
                </div>
                <div className="full ha">
                  <h3 className="apptitle">Home Address</h3>
                  <label>
                    <input
                      type="text"
                      name="parentAddress"
                      onChange={handleParentInfoChange}
                    />
                    <br></br>Home Address
                  </label>
                </div>
                <div className="full">
                  <h3 className="apptitle">Parent's Phone Number</h3>
                  <div className="hold">
                    <div className="box">
                      <label>
                        <input
                          type="text"
                          name="parentPhone"
                          onChange={handleParentInfoChange}
                          className="spees"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="full">
                  <h3 className="apptitle">Email</h3>
                  <div className="hold">
                    <div className="box">
                      <label>
                        <input
                          type="email"
                          name="parentEmail"
                          onChange={handleParentInfoChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="full c">
                <div className="cost apptitle">
                  Total: {midYear ? tuition / 2 : tuition}
                </div>
              </div>
              <button className="cart" type="submit">
                Add to cart
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
