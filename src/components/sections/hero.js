import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sandeep Kumar Swain.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I’m an enthusiastic final year student at KIIT DU, pursuing a Bachelor’s degree
        in Computer Science &amp; Engineering. As a passionate full-stack developer and
        freelancer, I love bringing ideas to life on the web. Beyond web development,
        I’m actively exploring the exciting realms of machine learning and quantum computing.
        I’m currently working as a SDE Intern at{' '}
        <a href="https://www.jungleegames.com/" target="_blank" rel="noreferrer">
          Junglee Games
        </a>{' '}.
        
        {/* Making websites look fantastic requires dedicated effort, and I thrive on the challenge.
        If you're curious about the power of simplicity, Visit this{' '}
        <a href="https://motherfuckingwebsite.com/">
          simple website
        </a>{' '}. */}<br /><br />
        In case you want to skip the fancy part, here's my resume.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="/resume2.pdf"
      target="_blank"
      rel="noreferrer">
      Resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
