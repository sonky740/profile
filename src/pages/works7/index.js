import React from "react";
import { Layout } from "../../components/index";

// main
const IndexPage = () => {
  return (
    <Layout>
      <main className="container center">
        {/* 우리은행 */}
        <section className="section-type1">
          <h2 className="tit-sub1">우리은행 WON기업뱅킹 앱 구축</h2>
          <p className="txt-p">우리은행 WON기업뱅킹앱 구축 프로젝트 진행 중</p>
          <div>
            <figure>
              {/* <a href={}>
               <img src={} alt="" />
              </a> */}
              <figcaption>이미지 공수 중</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
