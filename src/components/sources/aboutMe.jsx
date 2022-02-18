import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;

const MainMsg = styled.p`
  margin-bottom: 1rem;
  font-size: 3.2rem;
  color: #ffbd39;
`;

const SubMsg = styled.p`
  font-size: 2rem;
`

export default function AboutMe() {
  return (
    <Wrap>
      <MainMsg>프론트엔드를 지향하는<br />욕심 많은 퍼블리셔 손기연입니다!</MainMsg>
      <SubMsg>이력서를 보셨겠지만 다시 한 번 제 약력을 소개하겠습니다!</SubMsg>
    </Wrap>
  );
}
