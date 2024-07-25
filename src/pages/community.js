import "../css/Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import first from "../images/community/first.png";
import sec from "../images/community/sec.png";
import la from "../images/community/last.png";
import { Testimonials } from "./testimonials";
import { Footer } from "./footer";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../compnent/navbar";

const stripePromise = loadStripe(
  "pk_test_51N3N7mBzZpaOtO8UJKQxy6o4Po8DwzywH3GgEE1DM2abSxqa05qtahNkKdzKOYGeCw9glrxt0aUV6cvOs5G5DcOR00fbdqBiZy"
);

export const Community = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  const [eventSubmitted, setEventSubmitted] = useState(false);

  const userId = window.localStorage.getItem("userID");
  console.log("hna", userId);

  const fetchClientSecret = async (selectedEvent) => {
    try {
      if (selectedEvent.currentPlaces < selectedEvent.places) {
        setEventSubmitted(false);
        localStorage.setItem("eventId", JSON.stringify(selectedEvent._id));

        const response = await axios.post(
          "http://localhost:3001/event/create-checkout-session",
          {
            event: selectedEvent,
          }
        );
        console.log(response);
        const { sessionId } = response.data;

        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });
        console.log(result);
      } else {
        alert("the event program is full");
      }
    } catch (error) {
      console.error("Error fetching client sessionId:", error);
    }
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    const fetchSessionStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/event/session-status?session_id=${sessionId}`
        );
        console.log("Response data:", response.data);
        const data = response.data;

        if (data.status === "paid" && !eventSubmitted) {
          setEventSubmitted(true);
          handleSubmitRegistration();
          sessionStorage.removeItem("eventData");
        }
      } catch (error) {
        console.error("Error fetching session status:", error);
      }
    };

    if (sessionId) {
      fetchSessionStatus();
      sessionStorage.removeItem("eventData");
    }

    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmitRegistration = async () => {
    try {
      const storedEventId = localStorage.getItem("eventId");
      const eventId = storedEventId ? JSON.parse(storedEventId) : null;

      console.log(userId);
      const response = await axios.patch(
        `http://localhost:3001/event/${eventId}`,
        { userId }
      );

      console.log("Event registered successfuly: ", response.data);
      alert("Event registered successfuly.");
      navigate("/admission");
    } catch (error) {
      console.error("Error registering event:", error.message);
      alert("Error registering event", error.message);
    }
  };

  const isLoggedIn = !!cookies.access_token;

  return (
    <div>
      <section className="hero com">
        {window.location.pathname !== "/signup" && <Navbar />}
        <div className="content">
          <h3>CIRTA PRE-SCHOOL</h3>
          <h2 className="titles">COMMUNITY</h2>
          <p>
            CIRTA Pre-School is proud to have such a close-knit group of
            families to call its community. Together with parents, our preschool
            students learn the value of a social impact. With the help of our
            Parents’ Association, families are provided a wealth of
            opportunities to engage outside of school hours in events and
            service initiatives.
          </p>
        </div>
      </section>
      <section className="engagment">
        <div className="wrapper">
          <div className="main sec">
            <div className="right">
              <div className="img">
                <img src={first} alt="kids learning" />
              </div>
              <div className="se">
                <h2 className="shadowed">COMMUNITY ENGAGEMENT</h2>
                <h3 className="adm-title">SOCIAL IMPACT</h3>
                <p className="long">
                  <p className="t1">
                    As a local, family-built community school, CIRTA Pre-School
                    feels extraordinarily passionate about helping the Upper
                    West Side neighborhood thrive. We partner with several local
                    organizations and organize tangible, meaningful events that
                    connect our preschool students to the world around them.
                  </p>
                </p>
                <a href="#" className="team">
                  MEET OUR TEAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="wrapper">
          <div className="center">
            <h2 className="shadowed">COMMUNITY SERVICE</h2>
          </div>
          <div className="cards">
            {events.map((event) => (
              <div className="card" key={event._id}>
                <div className="imghold">
                  <img src={sec} alt="" />
                </div>
                <div className="bot">
                  <h3 className="card-title">{event.name}</h3>
                  <p>{event.description}</p>
                  <p>
                    <strong>Date: </strong>
                    {new Date(event.date).toISOString().split("T")[0]}
                  </p>
                  {isLoggedIn && (
                    <button
                      className="cartt"
                      onClick={() => fetchClientSecret(event)}
                    >
                      Submit to Event
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="parent">
        <div className="wrapper">
          <h2 className="shadowed">PARENTS ASSOCIATION</h2>
          <div className="rower">
            <div className="holder">
              <div className="imgholder">
                <img src={la} alt="" />
              </div>
            </div>
            <div className="info">
              <h3 className="adm-title">A STRONG HOME-SCHOOL PARTNERSHIP</h3>
              <p className="long">
                <p className="t1">
                  Our PA serves as the welcoming committee for Columbus
                  Pre-School families. Often parents enter Columbus as
                  first-time toddler parents, eager to connect with others, make
                  friends, and complement their children’s school experience.
                </p>
                <p className="t2">
                  From Afternoons in the Park to the Halloween Parade, to
                  Parents’ Nights Out, Coffee Mornings and Cocktail Parties, our
                  PA makes sure that our community has the chance to engage as
                  much as they’d like. Along with our students, parents often
                  leave Columbus with lifelong friends.
                </p>
              </p>
              <a href="#">GET involved</a>
            </div>
          </div>
        </div>
      </section>
      <div className="comspe">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};
