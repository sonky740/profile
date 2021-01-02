import React from "react";
import { Layout } from "../../components/index";
import Jamo1 from '../../images/jamo/jamo1.png';
import Jamo2 from '../../images/jamo/jamo2.png';
import Jamo3 from '../../images/jamo/jamo3.png';

// main
const IndexPage = () => {
  return (
    <Layout>
      <main className="container center">
        {/* 고객언어솔루션 */}
        <section className="section-type1">
          <h2 className="tit-sub1">고객언어솔루션</h2>
          <p className="txt-p">
            자사 자체 언어교정 솔루션으로 PC버전만 제작한 프로젝트입니다.<br />
            
          </p>
          <div>
            <figure>
              <a href={Jamo1} target="_blank" rel="noreferrer">
              <img src={Jamo1} alt="자모 메인" />
              </a>
              <figcaption>메인 페이지</figcaption>
            </figure>
            <figure>
              <a href={Jamo2} target="_blank" rel="noreferrer">
              <img src={Jamo2} alt="자모 네비게이션" />
              </a>
              <figcaption>네비게이션을 열었을 때</figcaption>
            </figure>
            <figure>
              <a href={Jamo3} target="_blank" rel="noreferrer">
                <img src={Jamo3} alt="자모 콘텐츠 교정" />
              </a>
              <figcaption>콘텐츠 교정 페이지</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
