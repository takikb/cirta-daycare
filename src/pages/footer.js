import "../css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div>
      <section className="maillist">
        <div className="wrapper">
          <div className="hero">
            <h3>Newsletter</h3>
            <div className="title-wrap">
              <h2 className="titles">SUBSCRIBE TO OUR MAILING LIST</h2>
            </div>
            <p>
              Subscribe to our CIRTA Pre-school newsletter for information about
              our school, news, and updates.
            </p>
            <div className="field">
              <input type="email" placeholder="Your Email" />
              <a href="/footinfo">subscribe</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrapper">
          <div className="holder">
            <div className="company">
              <h3>Company info</h3>
              <a href="/footinfo">About us</a>
              <a href="/footinfo">Carrier</a>
              <a href="/footinfo">Blog</a>
            </div>
            <div className="legal">
              <h3>Legal</h3>
              <a href="/footinfo">About us</a>
              <a href="/footinfo">Carrier</a>
              <a href="/footinfo">Blog</a>
            </div>
            <div className="Features">
              <h3>Features</h3>
              <a href="/footinfo">Business Marketing</a>
              <a href="/footinfo">User Analytic</a>
              <a href="/footinfo">Live Chat</a>
              <a href="/footinfo">Unlimited Support</a>
            </div>
            <div className="Resources">
              <h3>Resources</h3>
              <a href="/footinfo">IOS & Android</a>
              <a href="/footinfo">Watch a Demo</a>
              <a href="/footinfo">Customers</a>
              <a href="/footinfo">API</a>
            </div>
            <div className="touch">
              <h3>Get In touch</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="micon" /> (480)
                  555-0103
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="micon" />
                  4517 Washington Ave. Manchester, Kentucky 39495
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="micon" />
                  debra.holt@example.com
                </li>
              </ul>
            </div>
          </div>
          <div className="policy">
            <a href="/footinfo">Privacy Policy</a>
            <div className="conicon">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
