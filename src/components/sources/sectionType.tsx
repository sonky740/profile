import React from 'react';
import styled from 'styled-components';

interface SectionType {
  children: React.ReactNode;
  title: string;
}

// 버튼 영역 지정
const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;

  > h2 {
    font-size: 2.4rem;
    color: #ffbd39;
    margin-bottom: 1.6rem;
  }

  > p {
    color: #fff;
    font-size: 1.6rem;

    a {
      color: #fff;
      text-decoration: underline;
    }

    + p {
      margin-top: 0.8rem;
    }

    + div {
      margin-top: 1.6rem;
    }
  }
`;

const SectionType: React.FC<SectionType> = ({ children, title }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};

export default SectionType;
