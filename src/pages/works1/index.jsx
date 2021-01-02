import React from "react";
import { Layout } from "../../components/index";
import Heroes1 from '../../images/heroes/heroes1.png';
import Heroes2 from '../../images/heroes/heroes2.png';

// main
const IndexPage = () => {
  return (
    <Layout>
      <main className="container center">
        {/* 키움 */}
        <section className="section-type1">
          <h2 className="tit-sub1">넥센(現키움) 히어로즈 사이트 시스템 유지보수</h2>
          <p className="txt-p">
            당시 사내 인프라 업무를 하면서 처음으로 퍼블리싱 운영 업무를 맡게 된 사이트 입니다.<br />
            퍼블리싱 업무 말고도 DB, JAVA, Linux 뒷단 개발 및 서버도 조금씩 다뤘던 프로젝트입니다.
          </p>
          <div className="box-type2">
            <figure>
              <a href={Heroes1} target="_blank" rel="noreferrer">
                <img src={Heroes1} alt="넥센히어로즈 시절 이미지" />
              </a>
              <figcaption>넥센히어로즈 시절</figcaption>
            </figure>
            <figure>
              <a href={Heroes2} target="_blank" rel="noreferrer">
                <img src={Heroes2} alt="넥센히어로즈 시절 이미지" />
              </a>
              <figcaption>2018년 리뉴얼 후 키움히어로즈 시절</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
