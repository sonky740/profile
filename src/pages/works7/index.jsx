import React from "react";
import { Layout } from "../../components/index";
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
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      file2: file(relativePath: { eq: "woori/woori2.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      file3: file(relativePath: { eq: "woori/woori3.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main className="container center">
        {/* 우리은행 */}
        <section className="section-type1">
          <h2 className="tit-sub1">우리은행 WON기업뱅킹 앱 구축</h2>
          <p className="txt-p">상단 메뉴는 네이티브였으며 컨텐츠는 웹뷰로 진행하였습니다. 신규 앱 구축이라 인터랙션을 많이 신경 쓴 프로젝트입니다.</p>
          <div>
            <figure>
              <a href={Woori1} target="_blank" rel="noreferrer">
                <Img fixed={data.file1.childImageSharp.fixed} alt="작업당시 일부분" />
              </a>
              <figcaption>작업당시 일부분</figcaption>
            </figure>
            <figure>
              <a href={Woori2} target="_blank" rel="noreferrer">
                <Img fixed={data.file2.childImageSharp.fixed} alt="작업당시 일부분" />
              </a>
              <figcaption>작업당시 일부분</figcaption>
            </figure>
            <figure>
              <a href={Woori3} target="_blank" rel="noreferrer">
                <Img fixed={data.file3.childImageSharp.fixed} alt="실서버" />
              </a>
              <figcaption>실서버</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
