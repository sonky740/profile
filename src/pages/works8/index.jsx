import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index";
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
        <p>KB국민은행 오픈뱅킹에 총 79개 기관이 추가되면서 시각화 및 오픈뱅킹 관련된 페이지들을 수정 및 추가하였습니다.</p>
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
