import React from 'react';
import { Layout, Dl, SectionMain } from '../components/index.jsx';
import styled from 'styled-components';

const About = styled.div`
  h3 {
    font-size: 20px;
    color: #ffbd39;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 640px) {
    h3 {
      text-align: center;
    }
  }
`;

// main
const AboutPage = () => {
  return (
    <Layout title="손기연 | 이 사이트에 대하여">
      <SectionMain title="ABOUT">
        <About>
          <h3>이 사이트에 대하여</h3>

          <Dl title="이 사이트는 무엇인가?">5년차 UI 개발자 손기연의 포트폴리오 사이트입니다.</Dl>

          <Dl title="이 사이트는 어떤 구조로 되어있나?">
            <p>
              <a href="https://www.gatsbyjs.com/" target="_blank" className="link" rel="noreferrer">
                Gatsby
              </a>{' '}
              프레임워크를 사용하였으며,
            </p>
            <p>
              <a href="https://styled-components.com/" target="_blank" className="link" rel="noreferrer">
                styled-components
              </a>{' '}
              와{' '}
              <a href="https://sass-lang.com/" target="_blank" className="link" rel="noreferrer">
                scss
              </a>
              를 혼용하였습니다.
            </p>
            <p>
              해당 포트폴리오는 github를 통한{' '}
              <a href="https://www.gatsbyjs.com/products/cloud/" target="_blank" className="link" rel="noreferrer">
                gatsby-cloud
              </a>{' '}
              와{' '}
              <a href="https://vercel.com" target="_blank" className="link" rel="noreferrer">
                vercel
              </a>
              에 배포됩니다.
            </p>
          </Dl>
        </About>
      </SectionMain>
    </Layout>
  );
};

export default AboutPage;
