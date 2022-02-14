import React from 'react';
import styled from 'styled-components';

// 버튼 영역 지정
const ButtonArea = styled.div`
  display: flex;
  position: relative; // 하단 툴팁이 들어갈 경우
  flex-wrap: wrap;
  margin: 0 -0.4rem;
  text-align: center;

  > * {
    margin: 0.2rem 0.4rem 0.2rem;
  }
`;

export default function BtnArea({ children }) {
  return <ButtonArea>{children}</ButtonArea>;
}
