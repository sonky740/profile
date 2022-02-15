import React from 'react';
import styled from 'styled-components';

// 버튼 영역 지정
const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;

  > h2 {
    font-size: 2rem;
    color: #ffbd39;
    margin-bottom: 1.6rem;
  }

  > p {
    color: #bebebe;
    margin-bottom: 1.6rem;
    font-size: 1.6rem;

    a {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export default function SectionType({ title, children }) {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
}
