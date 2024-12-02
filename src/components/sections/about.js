import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig, education } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Coding has been my passion since the age of 12, and I've been hooked ever since.
            I thrive on building things from scratch and solving problems with my coding skills.
            Being a staunch advocate of open-source, I actively contribute to the community.
            </p>

            <p>
              Fast-forward to today, my focus lies in crafting pixel-perfect, high-performance products.
              I explore various technologies, spanning from Web/App Development to Machine Learning and
              Quantum Computing. Additionally, I have the privilege of serving as the AppDev Lead of the{' '}
              <a href="https://konnexions.netlify.app/">
                KIIT Konnexions
              </a>, the IT &amp; Web society of{' '}
              <a href="https://kiit.ac.in/">
                KIIT University
              </a> and as a Software Development Engineer at{' '}
              <a href="https://www.jungleegames.com/">
                Junglee Games Pvt. Ltd.
              </a>.
            </p>

            <p>Here’s my educational background:</p>
          </div>

          <ul className="skills-list">
            {education.map((degree, i) => (
              <li key={i}>
                ({degree.year}) {degree.name}{' '}
                <a href={degree.link} target="_blank" rel="noreferrer">
                  ({degree.institute})
                </a> -{' '}
                {degree.gpaLink == '' ? degree.score :
                <a href={degree.gpaLink} target="_blank" rel="noreferrer">
                  {degree.score}
                </a>}
              </li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
