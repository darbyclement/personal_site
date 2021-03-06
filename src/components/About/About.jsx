import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import resume from '../../images/Clement_Darby_resume.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hi! My name is Darby and I am a current 3rd year at UC Berkeley studying Electrical Engineering, Computer Science, and Math. '}
                </p>
                <p className="about-wrapper__info-text">
                  In my free time, I love to teach! You can catch me volunteering as a senior mentor
                  for <a href="https://csmentors.berkeley.edu/#/">Computer Science Mentors</a> for a{' '}
                  <a href="http://eecs70.org">discrete math and probability course</a>. I am also on
                  staff as a undergraduate student instructor (uGSI or TA) for{' '}
                  <a href="http://eecs16b.org">intro electrical engineering course!</a>
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'I am currently looking for interesting software engineering projects.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
