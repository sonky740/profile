import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Jamo1 from '../../images/jamo/jamo1.png';
import Jamo2 from '../../images/jamo/jamo2.png';
import Jamo3 from '../../images/jamo/jamo3.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "jamo/jamo1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "jamo/jamo2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file3: file(relativePath: { eq: "jamo/jamo3.png" }) {
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
      {/* 고객언어솔루션 */}
      <SectionType title="고객언어솔루션">
        <p>
          자사 자체 언어교정 솔루션으로 PC버전만 제작한 프로젝트입니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Jamo1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="자모 메인" />
            </a>
            <figcaption>메인 페이지</figcaption>
          </figure>
          <figure>
            <a href={Jamo2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="자모 네비게이션" />
            </a>
            <figcaption>네비게이션을 열었을 때</figcaption>
          </figure>
          <figure>
            <a href={Jamo3} target="_blank" rel="noreferrer">
              <Img fluid={data.file3.childImageSharp.fluid} alt="자모 콘텐츠 교정" />
            </a>
            <figcaption>콘텐츠 교정 페이지</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
