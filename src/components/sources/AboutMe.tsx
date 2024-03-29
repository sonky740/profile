import React from 'react';
import styled from 'styled-components';
import { ScrollAni } from '../index';

const AboutMe = () => {
  return (
    <Wrap>
      <ScrollAni>
        <MainMsg>
          프론트엔드를 지향하는
          <br />
          욕심 많은 개발자 손기연입니다!
        </MainMsg>
      </ScrollAni>
      <ScrollAni>
        <SubMsg>
          저는 서버 엔지니어로 시작해서, 사내 인프라, 다음은 5년넘게 퍼블리셔로
          활동하다가 이제 프론트엔드 개발자로 활동중입니다.
        </SubMsg>
      </ScrollAni>
      <ScrollAni>
        <SubMsg>
          정적인 UI보다는 동적인 UI를 좋아해서 늘 모션을 어떻게 줄까 고민하고,
          코드의 효율성을 위해서 컴포넌트 단위로 최적화된 마크업과 스크립트
          작성에 노력합니다. 또한, UX적인 측면도 생각하여 항상 키보드 이벤트와
          최소한의 접근성도 고려합니다.
        </SubMsg>
      </ScrollAni>
      <ScrollAni>
        <SubMsg>
          퍼블리셔 출신답게 기본 마크업, 스타일 작성, 웹 접근성, 크로스
          브라우징에 강점을 보입니다. 웹 에이전시를 오래 다니면서 다양한 근무
          환경과 사람을 만나서 적응력과 친화력이 우수하다고 생각합니다. 주로
          다루는 프론트 프레임워크는 Vue와 React이고 Typescript를 기반으로
          개발하는걸 선호합니다.
        </SubMsg>
      </ScrollAni>
      <ScrollAni>
        <SubMsg>
          저는 제 일이 재밌습니다. 재밌으니까 좋아하고 욕심이 생겨서 더 많은 걸
          배워보고 싶습니다.
        </SubMsg>
      </ScrollAni>
      <ScrollAni>
        <SubMsg>재밌게 일하는 것, 제가 추구하는 목표입니다.</SubMsg>
      </ScrollAni>
    </Wrap>
  );
};

const Wrap = styled.div``;

const MainMsg = styled.p`
  margin-bottom: 1rem;
  font-size: 3.2rem;
  color: #ffbd39;
`;

const SubMsg = styled.p`
  font-size: 1.8rem;

  & + & {
    margin-top: 1rem;
  }
`;

export default AboutMe;
