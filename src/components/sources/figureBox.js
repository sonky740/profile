import React from "react";
import styled from "styled-components";

// 버튼 영역 지정
const FigureBoxes = styled.div`
  max-width: 600px;
  margin: 0 auto;

  figure {
    margin: 16px auto 0;
  }

  &.flex {
    @media screen and (min-width: 1121px) {
      display: flex;
      max-width: 100%;
      margin: -16px 0 0 -16px;
  
      figure {
        width: calc(33% - 8px);
        margin: 16px 0 0 16px;
      }
    }
  }
`

export default function FigureBox({children}) {
  return (
    <FigureBoxes>
      {children}
    </FigureBoxes>
  )
}