import React from "react";
import { Layout, DL, SectionMain } from "../components/index.jsx";
import styled from "styled-components";

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
`

// main
const AboutPage = () => {
  return (
    <Layout>
      <SectionMain title="ABOUT">
        <About>
          <h3>이 사이트에 대하여</h3>

          <DL title="이 사이트는 무엇인가?">
            5년차 웹 퍼블리셔 손기연의 포트폴리오 사이트입니다.
          </DL>

          <DL title="이 사이트는 어떤 구조로 되어있나?">
            <a href="https://www.gatsbyjs.com/" className="color-a" target="_blank" rel="noreferrer">Gatsby</a> 프레임워크를 사용하였으며 디자인, 코딩 모두 제 손을 거쳤습니다.
          </DL>
        </About>
      </SectionMain>
    </Layout>
  )
}

export default AboutPage
