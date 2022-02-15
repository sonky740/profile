import React from 'react';
import styled from 'styled-components';

// 버튼 영역 지정
const FigureBoxes = styled.div`
  max-width: 720px;
  margin: 0 auto;

  figure {
    margin: 1.6rem auto 0;
  }
`;

export default function FigureBox({ children }) {
  return <FigureBoxes>{children}</FigureBoxes>;
}
