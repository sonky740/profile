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
          금융권 첫 프로젝트, IE8까지 맞춰야 하는 크로스 브라우징과 웹 접근성에 대해서 신경을 많이 썼으며,<br />
          처음으로 <a href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=9262" target="_blank" rel="noreferrer">웹 어워드 대상</a>을 수상했던 프로젝트입니다.
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
