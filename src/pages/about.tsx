import React from 'react';
import { Layout, Dl, SectionMain } from '../components/index';
import styled from 'styled-components';

// main
const AboutPage = () => {
  return (
    <Layout title="손기연 | 이 사이트에 대하여">
      <SectionMain title="ABOUT">
        <About>
          <section>
            <h3>간단 자기 소개</h3>
            <p>
              저는 서버 엔지니어로 시작해서, 사내 인프라(HelpDesk), 다음은 5년
              넘게 퍼블리셔로 활동하다가 이제 프런트엔드 개발자로 활동하고
              있습니다. 클라이언트와 제일 가까운 업무를 해나가는 것이
              프런트엔드의 꽃이라고 생각하며, 저의 재미입니다. 재밌게 일하는 것,
              제가 추구하는 목표입니다. 또한, 퍼블리셔 출신답게 기본 마크업,
              스타일 작성, 웹 접근성, 크로스 브라우징에 강점을 보입니다. 웹
              에이전시를 오래 다니면서 다양한 근무 환경과 사람을 만나서 적응력과
              친화력이 우수하다고 생각합니다. 주로 다루는 프런트 프레임워크는
              Vue와 React이고 Typescript를 기반으로 개발하는 걸 선호합니다.
            </p>
          </section>
          <section>
            <h3>간단 이력</h3>
            <Dl title="엑셈 (2022.09 ~ )">
              <ul>
                <li>한국건강관리협회 대시보드 개발</li>
                <li>모바일 인터맥스 개발</li>
                <li>exemONE 개발</li>
              </ul>
            </Dl>
            <Dl title="헥토 이노베이션 (2021.06 ~ 2022.09)">
              <ul>
                <li>SKT PASS 운영</li>
                <li>티오르(TIOR) 운영 및 고도화</li>
                <li>아파트청약케어 운영 및 고도화</li>
                <li>더쎈카드 운영 및 고도화</li>
              </ul>
            </Dl>
            <Dl title="인픽스 (2016.04 ~ 2021.06)">
              <ul>
                <li>- 넥센 히어로즈 사이트 시스템 유지보수 운영</li>
                <li>- 효성그룹 및 계열사 홈페이지 리뉴얼 구축</li>
                <li>- KB국민은행 개인 인터넷뱅킹 리뉴얼 구축</li>
                <li>- 포스코 차세대 MES 3.0 시스템 UI 구축</li>
                <li>- KB국민은행 차세대 통합인증서 플랫폼 구축</li>
                <li>- 고객언어솔루션 구축</li>
                <li>- 우리은행 WON기업뱅킹 앱(웹뷰) 구축</li>
                <li>- KB국민은행 오픈뱅킹 고도화</li>
                <li>- 우리은행 마이데이터 구축</li>
              </ul>
            </Dl>
          </section>
          <section>
            <h3>기술 스택</h3>
            <Dl title="HTML">
              웹 퍼블리셔 출신으로 웹 에이전시를 5년 넘게 다니면서 다양한
              프로젝트를 경험해왔는데 대부분 금융권을 거치면서 웹 접근성, 웹
              표준, 크로스 브라우징에 대한 경험이 많습니다. 항상 웹 접근성을
              고려한 시멘틱 마크업을 작성하고, 웹 표준을 준수하며, 웹 접근성에
              대한 이해도가 높아서 웹 접근성 관련된 이슈를 해결하는데
              능숙합니다.
            </Dl>
            <Dl title="CSS(SCSS)">
              다양한 프로젝트 구축 경험으로 인해 스타일 정리에 능숙하며, CSS
              프레임워크를 사용하지 않고, 직접 스타일을 작성하는데 익숙합니다.
              또한, CSS 프레임워크를 사용할 때도 프레임워크의 동작 원리를
              이해하고 사용합니다. 그리고 인터랙션에 관심이 많아서 효과적인
              모션을 구현하는데 노력합니다.
            </Dl>
            <Dl title="Javascript(Typescript)">
              웹 퍼블리셔일 때는 UI/UX를 재밌게 하기 위한 인터랙션 위주로
              스크립트를 짰고, 프론트엔드로 넘어오면서 성능 중시의 스크립트를
              짜게 되었습니다. 그래서 지루하지 않은 UI/UX를 위해 인터랙션을
              고려하면서도 성능을 고려한 스크립트를 짜는데 노력합니다. 또한,
              Typescript를 기반으로 개발하는걸 선호합니다.
            </Dl>
            <Dl title="React">
              18년에 처음 접한 프런트엔드 프레임워크며, 실무에선 포스코,
              아파트청약케어 어플, 더쎈카드에서 다뤘으며, 개인적으로는 블로그 및
              현재 포트폴리오 사이트에서 사용하고 있습니다. 최근엔 Vue를 하면서
              실무에서는 React를 안썼지만, 기본 지식은 잊지 않고 항상 사용할 수
              있게 블로그 및 포트폴리오 사이트 등 사이드 프로젝트 개념으로
              사용하고 있습니다. Gatsby, CRA, Next 등 다양한 프레임워크를
              사용해봤고, 추후 해당 사이트를 Next로 리뉴얼할 예정입니다.
            </Dl>
            <Dl title="Vue">
              실무에서 다룬지 1년 조금 넘었지만, React를 하다가 왔고 Vue 자체가
              낮은 진입장벽을 가지고 있어서 지금은 React보다 더 잘 다루며,
              Vue로는 어떤 프로젝트든지 쉽게 구축할 수 있습니다.
              Vue3(Composition API)와 Pinia로 상태관리를 하는걸 선호합니다.
            </Dl>
          </section>
        </About>
      </SectionMain>
    </Layout>
  );
};

const About = styled.div`
  font-size: 16px;

  section {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 20px;
    color: #ffbd39;
  }
`;

export default AboutPage;
