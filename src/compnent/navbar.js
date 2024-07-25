import "../css/Home.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoc from "../images/logoc.png";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const [isOpen, setOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!isOpen);
    document.querySelector(".phonebar").classList.toggle("open");
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const phonebar = document.querySelector(".phonebar");
    if (viewportWidth > 800 && phonebar.classList.contains("open")) {
      phonebar.classList.remove("open");
    }
  }, [viewportWidth]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="wrapper">
      <nav>
        <div className="tbox">
          <div className="logo">
            <img src={logoc} alt="cirta-logo" />
          </div>
          <div className="c1">
            <h2>Cirta</h2>
            <h3>Pre-School</h3>
          </div>
        </div>
        <div className="links">
          <ul>
            <div className="part">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/admission"> Admission </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/community"> Community </Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
            </div>
            <div className="righty">
              {!cookies.access_token ? (
                <li>
                  <Link to="/auth"> Login </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/communication"> Communicate </Link>
                  </li>
                  <button className="lgo" onClick={logout}>
                    Logout
                  </button>
                </>
              )}
              <a className="application" href="/admission">
                Apply Online
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </a>
            </div>
          </ul>
        </div>
        <button className="phone" onClick={toggleOpen}>
          {isOpen ? (
            <FontAwesomeIcon className="ic" icon={faTimes} />
          ) : (
            <FontAwesomeIcon className="ic" icon={faBars} />
          )}
        </button>
      </nav>
      <div className="phonebar">
        <div className="tbox">
          <div className="logo">
            <img src={logoc} alt="cirta-logo" />
          </div>
          <div className="c1">
            <h2>Cirta</h2>
            <h3>Pre-School</h3>
          </div>
        </div>
        <div className="links">
          <ul>
            <div className="part">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/admission"> Admission </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/events"> Events </Link>
              </li>
              <li>
                <Link to="/community"> Community </Link>
              </li>
            </div>
            <div className="righty">
              {!cookies.access_token ? (
                <li>
                  <Link to="/auth"> Login </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/communication"> Communicate </Link>
                  </li>
                  <li>
                    <Link to="/location">Location</Link>
                  </li>
                  <li>
                    <Link to="/communication">Chat</Link>
                  </li>
                  <button className="lgo" onClick={logout}>
                    Logout
                  </button>
                </>
              )}
              <a className="application" href="/admission">
                Apply Online
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
