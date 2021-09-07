import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index.jsx";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import KbOpenbk1 from '../../images/kbopenbk/kb_openbk1.png';
import KbOpenbk2 from '../../images/kbopenbk/kb_openbk2.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "kbopenbk/kb_openbk1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "kbopenbk/kb_openbk2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout align="center">
      {/* KB국민은행 오픈뱅킹 */}
      <SectionType title="KB국민은행 오픈뱅킹 고도화">
        <p>저축은행 및 증권사 79개가 추가됨으로 인한 인/스뱅 오픈뱅킹 고도화하는 프로젝트,<br />시각화(차트)가 중요시되는 프로젝트였는데 IE8 하위 버전에서 작동해야 하고<br />웹 접근성을 맞춰야 하는 환경에서 차트의 구현 방식에 대해 많은 걸 배웠던 프로젝트입니다.</p>
        <FigureBox>
          <figure>
            <a href={KbOpenbk1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="인터넷뱅킹 입출금 현황 퍼블 페이지" />
            </a>
            <figcaption>인터넷뱅킹 입출금 현황 퍼블 페이지</figcaption>
          </figure>
          <figure>
            <a href={KbOpenbk2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="인터넷뱅킹 자산현황 퍼블 페이지" />
            </a>
            <figcaption>인터넷뱅킹 자산현황 퍼블 페이지 (<a href="http://demo.riamore.net/HTML5demo/chart/" target="_blank" rel="noreferrer">rMate 차트</a> 활용)</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
