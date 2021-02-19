import React from "react";
import { Layout, SectionType, FigureBox } from "../../components/index";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Hyosung1 from '../../images/hyosung/hyosung1.png';
import Hyosung2 from '../../images/hyosung/hyosung2.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "hyosung/hyosung1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "hyosung/hyosung2.png" }) {
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
      {/* 효성 */}
      <SectionType title="효성그룹 및 계열사 홈페이지 리뉴얼">
        <p>
          효성그룹 사이트 리뉴얼 및 계열사 4개 홈페이지를 구축한 프로젝트입니다.<br />
          크로스 브라우징 및 웹 접근성을 취득한 사이트입니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Hyosung1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="효성중공업" />
            </a>
            <figcaption>당시 구축했던 효성그룹 및 하위 사이트 4개중 중공업부문</figcaption>
          </figure>
          <figure>
            <a href={Hyosung2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="효성중공업 협력업체 동반성장" />
            </a>
            <figcaption>효성중공업 협력업체 동반성장 사이트</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
