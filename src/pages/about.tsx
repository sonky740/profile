import React from 'react';
import { Layout, Dl, SectionMain } from '../components/index';
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

          <Dl title="이 사이트는 무엇인가?">
            5년차 UI 개발자 손기연의 포트폴리오 사이트입니다.
          </Dl>

          <Dl title="이 사이트는 어떤 구조로 되어있나?">
            <p>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                GatsbyJS
              </a>{' '}
              프레임워크를 기반으로{' '}
              <a
                href="https://www.typescriptlang.org/ko/docs/handbook/react.html"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                TypeScript(tsx)
              </a>
              로 구축하였습니다.
            </p>
            <p>
              <a
                href="https://styled-components.com/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                styled-components
              </a>{' '}
              와{' '}
              <a
                href="https://sass-lang.com/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                scss
              </a>
              를 혼용하였습니다.
            </p>
            <p>
              해당 포트폴리오는 github를 통한{' '}
              <a
                href="https://www.gatsbyjs.com/products/cloud/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                gatsby-cloud
              </a>{' '}
              와{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                vercel
              </a>
              에 배포됩니다.
            </p>
          </Dl>
          <Dl title="왜 GatsbyJS를 썼는지?">
            <p>
              1. React로 포트폴리오를 만들고 싶었습니다. 그 중 NextJS,
              GatsbyJS를 두고 고민하였으나,
            </p>
            <p>2. 다음 2가지 이유로 인해 Gatsbyjs를 택했습니다.</p>
            <p>
              2-1. 사이트 규모가 작고 정적인 포트폴리오이기에 Gatsbyjs가 적합하다고 생각합니다.
            </p>
            <p>
              2-2. 이미지 로드 성능을 높이기위한{' '}
              <a
                href="https://www.gatsbyjs.com/plugins/gatsby-plugin-image/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                gaysby-plugin-image
              </a>
              , Link에 마우스를 올리기만해도 해당 Link를 미리 불러와서 빠른
              로딩을 구현하는게 간단하였습니다.
            </p>
          </Dl>
        </About>
      </SectionMain>
    </Layout>
  );
};

export default AboutPage;
