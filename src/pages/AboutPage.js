import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Dolor est anim elit aliquip aliqua aliquip fugiat velit velit cupidatat cupidatat. Non sint nisi ad laboris officia reprehenderit voluptate voluptate esse laborum velit pariatur. Ipsum non ea adipisicing amet elit ullamco eiusmod.
            Laboris dolor sunt Lorem voluptate eu nulla reprehenderit do nisi. In deserunt aliqua adipisicing proident eu sunt culpa minim. Qui cupidatat nisi duis reprehenderit ex magna mollit duis aute sunt consequat. Dolore dolor magna voluptate officia cillum cupidatat ut.
            Labore sunt occaecat minim exercitation quis velit aliquip. Officia veniam eu irure pariatur pariatur non. Esse irure est ad duis nulla nostrud sunt deserunt. Consectetur duis nulla duis esse et ex deserunt sunt tempor magna quis voluptate ad. Ad ea reprehenderit ex officia Lorem excepteur aute eiusmod minim. Id consectetur dolore et deserunt eiusmod labore.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
