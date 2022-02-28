import React from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children: React.ReactNode;
}

// 버튼 영역 지정
const FigureBoxes = styled.div`
  max-width: 720px;
  margin: 0 auto;

  figure {
    margin: 1.6rem auto 0;
  }

  figcaption {
    margin-top: 0.4rem;
  }
`;

export default function FigureBox({ children }: DefaultTypes) {
  return <FigureBoxes>{children}</FigureBoxes>;
}
