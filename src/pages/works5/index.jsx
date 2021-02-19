import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Kbcert1 from '../../images/kbcert/kbcert1.png';
import Kbcert2 from '../../images/kbcert/kbcert2.png';


// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "kbcert/kbcert1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "kbcert/kbcert2.png" }) {
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
      {/* KB국민은행 통합인증 */}
      <SectionType title="KB국민은행 차세대 통합인증서 플랫폼 구축">
        <p>관리자 통합인증 부분을 독립사이트로 구축</p>
        <FigureBox>
          <figure>
            <a href={Kbcert1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="통합인증 메인" />
            </a>
            <figcaption>KB 통합인증 메인</figcaption>
          </figure>
          <figure>
            <a href={Kbcert2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="통합인증 요소" />
            </a>
            <figcaption>KB 통합인증 중 하나</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
