import "../css/Home.css";
import { Footer } from "./footer";
import s from "../images/about/s.png";
import t from "../images/about/t.png";
import l from "../images/about/l.png";
import f from "../images/about/f.png";
import { Navbar } from "../compnent/navbar";

export const About = () => {
  return (
    <>
      <section className="hero about">
        {window.location.pathname !== "/signup" && <Navbar />}
        <div className="content">
          <h3>CIRTA PRE-SCHOOL</h3>
          <h2 className="titles">ABOUT US</h2>
          <p>
            At Cirta, we believe in the power of early childhood education to
            shape the future. Our preschool is more than just a place of
            learning; it's a nurturing community where children embark on a
            journey of discovery, guided by passionate educators dedicated to
            their growth and development.
          </p>
        </div>
      </section>
      <section className="look">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="container">
            <div className="text">
              <h3 className="small">look around</h3>
              <h2 className="big">our school</h2>
              <div className="desc">
                <p className="t1">
                  Located in the heart of Constantine, our preschool is inspired
                  by the rich history and cultural heritage of this ancient
                  city. At Cirta, we believe in providing a nurturing
                  environment where children can thrive, learn, and explore the
                  world around them.
                </p>
                <p className="t2">
                  Our dedicated team of educators is committed to fostering a
                  love for learning through play-based activities, hands-on
                  experiences, and meaningful interactions. We understand that
                  each child is unique, and we celebrate their individual
                  strengths, interests, and abilities.
                </p>
                <p className="t3">
                  At Cirta Pre-School, we prioritize the holistic development of
                  every child, focusing on their cognitive, social, emotional,
                  and physical growth. Through our engaging curriculum, which is
                  designed to stimulate creativity, critical thinking, and
                  problem-solving skills, we prepare children for a lifetime of
                  learning.
                </p>
                <p className="t4">
                  We invite you to join us on this exciting journey of discovery
                  and growth. Explore our website to learn more about our
                  programs, facilities, and approach to early childhood
                  education. Schedule a visit to experience the warmth and
                  vibrancy of our preschool community firsthand.
                </p>
                <a href="#">Meet Our Teachers</a>
              </div>
            </div>
            <div className="images">
              <div className="bigimg">
                <img src={f} alt="" />
              </div>
              <div className="album">
                <img src={s} alt="" />
                <img src={t} alt="" />
                <img src={l} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
