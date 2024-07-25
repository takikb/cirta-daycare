import "../css/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="wrapper">
        <h3>what our community is saying</h3>
        <h2 className="titles">CIRTA TESTIMONIALS</h2>
        <div className="cards-holder">
          <div className="card">
            <div className="stars">
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={regularStar} color="gold" />
            </div>
            <p>
              "My kids always felt loved, safe, and happy at CIRTA Pre-School.
              The teachers are wonderful and their curriculums are creative and
              relevant. This is a school that really cares about children and
              understands how they thrive."
            </p>
            <h5>Taki k</h5>
          </div>
          <div className="card">
            <div className="stars">
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={regularStar} color="gold" />
            </div>
            <p>
              "CIRTA Pre-School has been a nurturing & loving environment where
              my children have developed a deep love of learning and made the
              most incredible friends. The community has been incredible for our
              entire family."
            </p>
            <h5> ABDERRAHMANe B</h5>
          </div>
          <div className="card">
            <div className="stars">
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={solidStar} color="gold" />
              <FontAwesomeIcon icon={regularStar} color="gold" />
            </div>
            <p>
              "Finding the right preschool for your toddler could be a daunting
              task. CIRTA Pre-School made it a no-brainer with their private
              playground, in-house gymnastics facility, and warm & welcoming
              staff. I know my son is in the best hands, and is thriving within
              the play-based, emergent curriculum. I can't wait to see what the
              next few years bring!"
            </p>
            <h5>Aymen B</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
