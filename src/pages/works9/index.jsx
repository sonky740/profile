import React from "react";
import { Layout } from "../../components/index";
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
    <Layout>
      <main className="container center">
        {/* 우리은행 마이데이터 구축 */}
        <section className="section-type1">
          <h2 className="tit-sub1">우리은행 마이데이터 구축</h2>
          <p className="txt-p">프로젝트 진행 중입니다.</p>
          {/* <div className="img-box1">
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
          </div> */}
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
