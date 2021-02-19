import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Kbbanking1 from '../../images/kbbanking/kb_banking.jpg';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "kbbanking/kb_banking.jpg" }) {
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
      {/* KB국민은행 인터넷뱅킹 */}
      <SectionType title="KB국민은행 개인 인터넷뱅킹 리뉴얼">
        <p>
          국민은행 인터넷뱅킹 리뉴얼 및 웹 접근성 취득, <a
            href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=9262" target="_blank" rel="noreferrer">웹 어워드
            대상</a>을 받은 프로젝트입니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Kbbanking1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="KB국민은행 개인 인터넷뱅킹 메인" />
            </a>
            <figcaption>KB국민은행 개인 인터넷뱅킹 메인</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
