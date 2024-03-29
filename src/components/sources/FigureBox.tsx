import React from 'react';
import styled from 'styled-components';

const FigureBox = ({ children }: DefaultFC) => {
  return <FigureBoxes>{children}</FigureBoxes>;
};

// 버튼 영역 지정
const FigureBoxes = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;

  figure {
    margin: 1.6rem auto 0;
  }

  figcaption {
    margin-top: 0.4rem;
  }
`;

export default FigureBox;
