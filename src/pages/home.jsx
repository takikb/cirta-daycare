import "../css/Home.css";

import { Footer } from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import kidsover from "../images/kidsover.png";
import frontimage from "../images/redgirl.png";
import kids from "../images/Childrens Brooklyn Preschools of science Park Slope & Carroll garden 2.png";
import flowerk from "../images/columbus-gallery-1 1.png";
import admissionp from "../images/icons-admissions 1.png";
import examin from "../images/icons-exmissions 1.png";
import kidm from "../images/mm 1.png";
import { Navbar } from "../compnent/navbar";
import { Testimonials } from "./testimonials";

export const Home = () => {
  return (
    <div>
      {window.location.pathname !== "/signup" && <Navbar />}
      <div className="solor"></div>
      <div className="solotr"></div>
      <section className="lead">
        <div className="wrapper">
          <div className="main">
            <div className="left">
              <h3>Welcome to</h3>
              <h2>
                Cirta <p>Pre-School</p>
              </h2>
              <p className="long">
                At CIRTA Pre-School, we believe that all young learners should
                be respected, valued, and encouraged to investigate the world
                around them. We provide a private preschool education rich in
                experiential learning, intentional exploration, and meaningful
                social-emotional development.
              </p>
              <a href="/admission" className="take">
                Take a look around
              </a>
              <a href="#" className="more">
                Learn More
              </a>
            </div>
            <div className="right">
              <div className="c2">
                <div className="imgcontainer">
                  <img src={kidsover} alt="kidscartoon" />
                </div>
                <div className="bigimage">
                  <img src={frontimage} alt="girlwithbook" />
                </div>
              </div>
            </div>
          </div>
          <div className="main sec">
            <div className="right">
              <div className="img">
                <img src={kids} alt="kids learning" />
              </div>
              <div className="se">
                <h3 className="titles">a holistic education</h3>
                <p>
                  With passion and enthusiasm, our talented early-childhood
                  educators set children down the path toward becoming lifelong
                  learners, equipped with the skills they need to take on
                  challenges in their future and the become change-makers of
                  tomorrow.
                </p>
              </div>
            </div>
            <div className="left">
              <h3>Our Pre-School</h3>
              <h2>See what we're all about at cirta</h2>
              <p className="long">
                <p className="t1">
                  At CIRTA Pre-school, children feel nurtured and safe in their
                  school environment.
                </p>
                <p className="t2">
                  With the help of teachers and the environment as the “third
                  teacher,” students have opportunities to confidently take
                  risks in all areas of their development.
                </p>
                <p className="t3">
                  No matter their individual learning style and unique
                  contributions, students know that they are integral, important
                  members of their class and school community
                </p>
              </p>
              <a href="/about" className="aboutus">
                about us
                <FontAwesomeIcon icon={faArrowRight} className="g" />
              </a>
              <div className="flowerimg">
                <img src={flowerk} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="admissions">
        <div className="wrapper">
          <h3 className="adTitle">
            <q>Play Is The Highest Form Of Research</q>
          </h3>
          <h4 className="subtitle">– Albert Einstein</h4>
          <div className="cwrap">
            <div className="rectangle">
              <h4>Admissions</h4>
              <h2 className="titles">
                LEARN MORE ABOUT OUR ADMISSIONS PROCESS
              </h2>
              <p>
                We’re now accepting applications for the 2024-2025 school year.
              </p>
              <a href="admission" className="apply">
                Apply Now
              </a>
            </div>
            <div className="subrec">
              <div className="cardholder">
                <div className="invcard">
                  <img src={admissionp}></img>
                  <h3 className="titles not">Admission Process</h3>
                  <p>
                    Applications open for the 2024-2025 school year on Sep. 6th,
                    2023!
                  </p>
                </div>
                <div className="invcard">
                  <img src={examin}></img>
                  <h3 className="titles">KINDERGARTEN PLACEMENT</h3>
                  <p>
                    We help families throughout the whole exmissions process to
                    find best fit for kindergarten for their child.
                  </p>
                </div>
              </div>
              <div className="rightimg">
                <img src={kidm} alt="kid with baloons" />
              </div>
            </div>
          </div>
        </div>
        <div className="tala">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1716335936414!6m8!1m7!1sCAoSLEFGMVFpcE1WallzNS1ZYy1YWDRoaHZpVmV6MGc0eTJ5VkdkN3FSQVNSdnlf!2m2!1d53.517537798252!2d-2.3345598062294!3f317.5016805880847!4f-18.168733315068067!5f0.7820865974627469"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};
