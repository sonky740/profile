import React from 'react';
import styled from 'styled-components';

interface SectionMainType {
  children: React.ReactNode;
  title: string;
}

const SectionMain: React.FC<SectionMainType> = ({ children, title }) => {
  return (
    <Section>
      <h2 data-text={title}>{title}</h2>
      {children}
    </Section>
  );
};

const Section = styled.section`
  h2 {
    position: relative;
    font-size: 4.8rem;
    margin-bottom: 3.2rem;
    text-align: center;

    &:before {
      content: attr(data-text);
      position: absolute;
      top: -3rem;
      left: 0;
      right: 0;
      font-size: 7.6rem;
      color: rgba(255, 255, 255, 0.03);
      z-index: -1;
      font-weight: 900;
      animation: main-title 1s ease-out;

      @keyframes main-title {
        from {
          transform: scale(0);
        }

        to {
          transform: scale(1);
        }
      }

      @media screen and (max-width: 640px) {
        content: '';
      }
    }
  }
`;

export default SectionMain;
