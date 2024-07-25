import "../css/Home.css";

import { Footer } from "./footer";

import kidTree from "../images/education/kidTree.png";
import kidLearn from "../images/education/kidLearn.png";

import kidLearn2 from "../images/education/kidLearn2.png";
import kidshug from "../images/education/kidshug.png";
import kidsdraw from "../images/education/kidsDraw.png";
import { Navbar } from "../compnent/navbar";

export const Education = () => {
    return (
        <div>
            <section className="hero edu">
                {window.location.pathname !== "/signup" && <Navbar />}
                <div className="content">
                    <h3>PROGRAMS</h3>
                    <h2 className="titles">EDUCATION AT CIRTA</h2>
                    <p>
                        Our educational philosophy is Reggio-inspired, with a
                        focus on building a strong foundation in
                        social-emotional development. We serve ages 2-5, and
                        learning in our preschool and enrichment programs
                        happens through child-driven inquiry and exploration.
                    </p>
                </div>
            </section>
            <section className="inspired">
                <div className="wrapper">
                    <div className="main sec">
                        <div className="right">
                            <div className="img">
                                <img src={kidTree} alt="kids learning" />
                            </div>
                            <div className="se">
                                <h3 className="titles">
                                    RICH LEARNING EXPERIENCES
                                </h3>
                                <p>
                                    Our teachers serve as researchers and
                                    partners in the child’s experiences, molding
                                    curriculum based on the group’s and
                                    individual’s interests and natural
                                    curiosities. We provide learning experiences
                                    across all domains – rich in language,
                                    science, STEM, reading and math readiness,
                                    gross and fine motor development, and
                                    creative arts. By allowing the children to
                                    assert their interests and explore subjects
                                    in deep ways through long-term projects, our
                                    teachers help encourage students to pursue
                                    their passions and develop love for
                                    learning.
                                </p>
                                <div className="hold">
                                    <a href="#">Admissions Process</a>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                            <div className="flexchild">
                                <h3 className="new">
                                    INSPIRED BY THE REGGIO EMILIA APPROACH
                                </h3>
                                <h2>OUR PHILOSOPHY</h2>
                                <p className="long">
                                    <p className="t1">
                                        CIRTA Pre-School is a learning
                                        environment that nurtures and respects
                                        the different gifts and variety in
                                        learning styles that each child brings
                                        to the classroom community.
                                    </p>
                                    <p className="t2">
                                        We build empathy, collaboartion,
                                        independence, creativity and confidence
                                        by allowing children to be authors of
                                        their own learning. Active, expressive
                                        learning is emphasized, and brought to
                                        life through our emergent curriculum.
                                    </p>
                                </p>
                            </div>
                            <div className="img">
                                <img src={kidLearn} alt="kids learning" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="programs">
                <div className="wrapper">
                    <h2 className="headtitle">School Programs</h2>
                    <div className="main sec">
                        <div className="right">
                            <div className="img">
                                <img src={kidLearn2} alt="kids learning" />
                            </div>
                            <div className="se">
                                <h2 className="shadowed">Threes</h2>
                                <h3 className="adm-title">
                                    DIVING DEEPLY INTO LEARNING AND COMMUNITY
                                </h3>
                                <p className="long">
                                    <p className="t1">
                                        The world of the three-year-old is
                                        filled with socialization, conversation,
                                        imagination, and curiosity. They have
                                        moved through their stage of separation
                                        and now take ownership of the classroom
                                        spaces. They understand the basic ways
                                        we socialize and interact with our
                                        peers, and so we begin to challenge
                                        them.
                                    </p>
                                    <p className="t2">
                                        We provide them with moments to work on
                                        patience through taking longer turns and
                                        sharing materials. We lengthen our
                                        meeting times and read longer books to
                                        work on more focused attention spans.
                                        Now that the children have learned to
                                        come together as a whole group, we
                                        challenge them to work in pairs and
                                        small groups as they investigate
                                        curricula and class activities.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="left">
                            <div className="flexchild">
                                <h2 className="shadowed">Twos</h2>
                                <h3 className="adm-title">
                                    THE JOURNEY BEGINS
                                </h3>
                                <p className="long">
                                    <p className="t1">
                                        Two-year-olds are just beginning their
                                        journey into the world of edcuation.
                                        They are learning to understand the
                                        process of separation, working to
                                        develop trust with their teachers and
                                        comfort in their classroom environment.
                                        With the help of their teachers, 2s
                                        begin to form an awareness of their
                                        social footprint – both as individuals
                                        who can care for themselves, and as
                                        members of the classroom community who
                                        care for each other.
                                    </p>
                                    <p className="t2">
                                        Teachers aid in the development of
                                        language acquisition as they talk to the
                                        children during all interactions. Using
                                        age-appropriate language to describe the
                                        world around them, teachers model
                                        language to help promote peer
                                        interactions and move children from
                                        simply playing side by side to more
                                        engaged in cooperative play.
                                    </p>
                                </p>
                            </div>
                            <div className="img">
                                <img src={kidshug} alt="kids learning" />
                            </div>
                        </div>
                    </div>
                    <div className="main sec last">
                        <div className="right last">
                            <div className="img">
                                <img src={kidsdraw} alt="kids learning" />
                            </div>
                            <div className="se">
                                <h2 className="shadowed">Fours</h2>
                                <h3 className="adm-title">
                                    GETTING READY TO MOVE ON
                                </h3>
                                <p className="long">
                                    <p className="t1">
                                        As children move into the 4s classes,
                                        the students have incorporated all the
                                        social aspects from the 2s and 3s years.
                                        They understand their value as part of
                                        the group. They are able to take care of
                                        their own needs and the needs of others.
                                        They can be part of a pair, small or
                                        large learning group. They are
                                        continuing to work on negotiating social
                                        situations using dialogue.
                                    </p>
                                    <p className="t2">
                                        With this social-emotional background,
                                        our oldest groups are now able to devote
                                        their time to serious research and
                                        in-depth curricular studies. 4s have the
                                        most involved questions, and it is up to
                                        the teachers to help the children learn
                                        ways to investigate and research in
                                        order to answer these questions. They
                                        learn to find answers from books, peers,
                                        adults, their own experimentation, and
                                        experiences they have in the world.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="app">
                        Admissions Application
                    </a>
                </div>
            </section>
            <Footer />
        </div>
    );
};
