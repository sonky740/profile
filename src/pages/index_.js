import React, { useLayoutEffect, useRef } from "react";
import { Layout, Tooltip } from "../components/index";
import { Link } from "gatsby";
import ScrollMagic from "scrollmagic";

// main
const IndexPage = () => {
  const scrollDiv = useRef(null);

  useLayoutEffect(() => {
    const $scrollTrigger = scrollDiv.current.querySelectorAll('[data-scroll');
    if ($scrollTrigger.length > 0) {
      const controller = new ScrollMagic.Controller();
      for (let i = 0; i < $scrollTrigger.length; i++) {

        // fade-out
        if ($scrollTrigger[i].dataset.scroll === 'fade-out') {
          new ScrollMagic.Scene({
            triggerElement: $scrollTrigger[i],
            triggerHook: 0.8
          })
          .setClassToggle($scrollTrigger[i], 'active')
          .addTo(controller)
          // .addIndicators({name: i+1, colorStart: 'red', colorTrigger: 'blue'});
        }

        // another
      }
    }
  })

  return (
    <Layout>
      {/* <!-- ### 메인 ### --> */}
      <main className="container">
        {/* <!-- 포폴 --> */}
        <section className="main-section1">
          <h2 className="tit-main1" data-text="PROJECT">PROJECT</h2>
          <div className="box-type1" ref={scrollDiv}>
            {/* <!-- KB국민은행 오픈뱅킹 고도화 --> */}
            <article className="type8" data-scroll="fade-out">
              <h3 className="tit-sub1">KB국민은행 오픈뱅킹 고도화</h3>
              <div className="content">
                KB국민은행 오픈뱅킹 고도화
              </div>
              <div className="bottom">
                <p>역할: PA 30%</p>
                <p>기간: 2020.11 ~ 2021.02</p>
                <div className="btn-area1">
                  <Tooltip text="사이트 바로가기">아직 오픈전입니다.</Tooltip>
                  <Link to="/works8" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- 우리은행 WON기업뱅킹 앱 구축 --> */}
            <article className="type7" data-scroll="fade-out">
              <h3 className="tit-sub1">우리은행 WON기업뱅킹 앱 구축</h3>
              <div className="content">
                우리은행 WON기업뱅킹앱 구축 프로젝트 진행 중
              </div>
              <div className="bottom">
                <p>역할: PA 25%</p>
                <p>기간: 2020.06 ~ 2020.09</p>
                <div className="btn-area1">
                  <Tooltip text="사이트 바로가기">아직 오픈전입니다.</Tooltip>
                  <Link to="/works7" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- 고객언어솔루션 --> */}
            <article className="type6" data-scroll="fade-out">
              <h3 className="tit-sub1">고객언어솔루션</h3>
              <div className="content">
                자사 자체 언어교정 솔루션으로 PC버전만 제작하여 테스트 중
              </div>
              <div className="bottom">
                <p>역할: PL 100%</p>
                <p>기간: 2020.04 ~ 2020.05</p>
                <div className="btn-area1">
                  <Tooltip text="사이트 바로가기">아직 오픈전입니다.</Tooltip>
                  <Link to="/works6" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- KB국민은행 차세대 통합인증서 플랫폼 구축 --> */}
            <article className="type5" data-scroll="fade-out">
              <h3 className="tit-sub1">KB국민은행 차세대 통합인증서 플랫폼 구축</h3>
              <div className="content">
                관리자 통합인증 부분을 독립사이트로 구축
              </div>
              <div className="bottom">
                <p>역할: PL 100%</p>
                <p>기간: 2019.09 ~ 2020.03</p>
                <div className="btn-area1">
                  <Tooltip text="관리자 사이트">관리자 사이트라 접근이 불가합니다.</Tooltip>
                  <Link to="/works5" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- 포스코 차세대 MES 3.0 --> */}
            <article className="type4" data-scroll="fade-out">
              <h3 className="tit-sub1">포스코 차세대 MES 3.0 시스템 UI 개선</h3>
              <div className="content">
                MES 시스템 React로 구축
              </div>
              <div className="bottom">
                <p>역할: PA 20%</p>
                <p>기간: 2019.01 ~ 2019.09</p>
                <div className="btn-area1">
                  <Tooltip text="관리자 사이트">관리자 사이트라 접근이 불가합니다.</Tooltip>
                  <Link to="/works4" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- KB국민은행 인뱅 --> */}
            <article className="type3" data-scroll="fade-out">
              <h3 className="tit-sub1">KB국민은행 개인 인터넷뱅킹 리뉴얼</h3>
              <div className="content">
                KB국민은행 개인 인터넷뱅킹 리뉴얼 및 웹 접근성 취득, 웹 어워드 대상 수상
              </div>
              <div className="bottom">
                <p>역할: PA 20%</p>
                <p>기간: 2018.07 ~ 2018.11</p>
                <div className="btn-area1">
                  <a href="https://obank.kbstar.com/quics?page=obank" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                  <Link to="/works3" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- 효성 --> */}
            <article className="type2" data-scroll="fade-out">
              <h3 className="tit-sub1">효성그룹 및 계열사 홈페이지 리뉴얼</h3>
              <div className="content">
                효성그룹 사이트 수정 및 하위 4개 사이트 리뉴얼, 다국어 추가
              </div>
              <div className="bottom">
                <p>역할: PA 25%</p>
                <p>기간: 2018.03 ~ 2018.07</p>
                <div className="btn-area1">
                  <div data-tooltip="click">
                    <a href="?" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                    <div>
                      <div className="btn-area1">
                        <a href="http://www.hyosung.co.kr/kr/index.do" className="btn-type1" target="_blank" rel="noreferrer">효성그룹</a>
                        <a href="http://www.hyosungtnc.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성티앤씨</a>
                        <a href="http://www.hyosungheavyindustries.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성중공업</a>
                        <a href="http://www.hyosungadvancedmaterials.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성첨단소재</a>
                        <a href="http://www.hyosungchemical.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성화학</a>
                      </div>
                    </div>
                  </div>
                  <Link to="/works2" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
            {/* <!-- 넥센 --> */}
            <article className="type1" data-scroll="fade-out">
              <h3 className="tit-sub1">넥센(現키움) 히어로즈 사이트 시스템 유지보수</h3>
              <div className="content">
                시스템 유지보수, 퍼블리싱 및 간단한 개발
              </div>
              <div className="bottom">
                <p>역할: PA 100%</p>
                <p>기간: 2016.07 ~ 2018.07</p>
                <div className="btn-area1">
                  <a href="https://www.heroesbaseball.co.kr/index.do" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                  <Link to="/works1" className="btn-type1">기술서</Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
