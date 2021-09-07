import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index.jsx";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Woori1 from '../../images/woori/woori1.png';
import Woori2 from '../../images/woori/woori2.png';
import Woori3 from '../../images/woori/woori3.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "woori/woori1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "woori/woori2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file3: file(relativePath: { eq: "woori/woori3.png" }) {
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
      {/* 우리은행 */}
      <SectionType title="우리은행 WON기업뱅킹 앱 구축">
        <p>우리은행 WON기업뱅킹앱 구축. 순수 CSS 인터랙션과 CSS 변수에 대해서 많은 걸 배웠던 프로젝트입니다.</p>
        <FigureBox>
          <figure>
            <a href={Woori1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="작업당시 일부분" />
            </a>
            <figcaption>작업당시 일부분</figcaption>
          </figure>
          <figure>
            <a href={Woori2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="작업당시 일부분" />
            </a>
            <figcaption>작업당시 일부분</figcaption>
          </figure>
          <figure>
            <a href={Woori3} target="_blank" rel="noreferrer">
              <Img fluid={data.file3.childImageSharp.fluid} alt="실서버" />
            </a>
            <figcaption>실서버</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
