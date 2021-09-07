import React from "react";
import { Layout, SectionType } from "../../components/index.jsx";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";
// import KbOpenbk1 from '../../images/kbopenbk/kb_openbk1.png';
// import KbOpenbk2 from '../../images/kbopenbk/kb_openbk2.png';

// main
const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file1: file(relativePath: { eq: "kbopenbk/kb_openbk1.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     file2: file(relativePath: { eq: "kbopenbk/kb_openbk2.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout align="center">
      {/* 우리은행 마이데이터 구축 */}
      <SectionType title="우리은행 마이데이터 구축">
        <p>프로젝트 진행 중입니다.</p>
        {/* <FigureBox>
          <figure>
            <a href={KbOpenbk1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="작업당시 일부분" />
            </a>
            <figcaption></figcaption>
          </figure>
          <figure>
            <a href={KbOpenbk2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="작업당시 일부분" />
            </a>
            <figcaption></figcaption>
          </figure>
        </FigureBox> */}
      </SectionType>
    </Layout>
  )
}

export default IndexPage
