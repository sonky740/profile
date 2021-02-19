import React from "react";
import { Layout, Tooltip, BtnArea, SectionMain, BoxType } from "../components/index";
import { Link } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";

// main
const IndexPage = () => {
  return (
    <Layout>
      {/* <!-- 포폴 --> */}
      <SectionMain title="PROJECT">
        <BoxType>
          {/* <!-- 우리은행 마이데이터 구축 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>우리은행 마이데이터 구축</h3>
            <div className="content">
              우리은행 마이데이터 구축 프로젝트 진행 중
            </div>
            <div className="bottom">
              <p>역할: PA ?%</p>
              <p>기간: 2021.02 ~ 2021.09</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">아직 오픈전입니다.</Tooltip>
                <Link to="/works9" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- KB국민은행 오픈뱅킹 고도화 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>KB국민은행 오픈뱅킹 고도화</h3>
            <div className="content">
              KB국민은행 오픈뱅킹(인터넷뱅킹, 스타뱅킹) 고도화
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2020.11 ~ 2021.02</p>
              <BtnArea>
                <a href="https://obank.kbstar.com/quics?page=obank&QSL=F#loading" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                <Link to="/works8" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- 우리은행 WON기업뱅킹 앱 구축 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>우리은행 WON기업뱅킹 앱 구축</h3>
            <div className="content">
              새로운 WON기업뱅킹 앱 구축, 웹뷰 영역 작업
            </div>
            <div className="bottom">
              <p>역할: PA 80%</p>
              <p>기간: 2020.06 ~ 2020.09</p>
              <BtnArea>
                <a href="https://svc.wooribank.com/svc/Dream?withyou=SFSBK0003" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                <Link to="/works7" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- 고객언어솔루션 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>고객언어솔루션</h3>
            <div className="content">
              자사 자체 언어교정 솔루션으로 PC버전만 제작하여 테스트 중
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2020.04 ~ 2020.05</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">아직 오픈전입니다.</Tooltip>
                <Link to="/works6" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- KB국민은행 차세대 통합인증서 플랫폼 구축 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>KB국민은행 차세대 통합인증서 플랫폼 구축</h3>
            <div className="content">
              관리자 통합인증 부분을 독립사이트로 구축
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2019.09 ~ 2020.03</p>
              <BtnArea>
                <Tooltip text="관리자 사이트">관리자 사이트라 접근이 불가합니다.</Tooltip>
                <Link to="/works5" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- 포스코 차세대 MES 3.0 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>포스코 차세대 MES 3.0 시스템 UI 개선</h3>
            <div className="content">
              MES 시스템 React로 구축
            </div>
            <div className="bottom">
              <p>역할: PA 70%</p>
              <p>기간: 2019.01 ~ 2019.09</p>
              <BtnArea>
                <Tooltip text="관리자 사이트">관리자 사이트라 접근이 불가합니다.</Tooltip>
                <Link to="/works4" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>  
          </ScrollAnimation>
          {/* <!-- KB국민은행 인뱅 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>KB국민은행 개인 인터넷뱅킹 리뉴얼</h3>
            <div className="content">
              KB국민은행 개인 인터넷뱅킹 리뉴얼 및 웹 접근성 취득, 웹 어워드 대상 수상
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2018.07 ~ 2018.11</p>
              <BtnArea>
                <a href="https://obank.kbstar.com/quics?page=obank" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                <Link to="/works3" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- 효성 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>효성그룹 및 계열사 홈페이지 리뉴얼</h3>
            <div className="content">
              효성그룹 사이트 수정 및 하위 4개 사이트 리뉴얼, 다국어 추가
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2018.03 ~ 2018.07</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  <BtnArea>
                    <a href="http://www.hyosung.co.kr/kr/index.do" className="btn-type1" target="_blank" rel="noreferrer">효성그룹</a>
                    <a href="http://www.hyosungtnc.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성티앤씨</a>
                    <a href="http://www.hyosungheavyindustries.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성중공업</a>
                    <a href="http://www.hyosungadvancedmaterials.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성첨단소재</a>
                    <a href="http://www.hyosungchemical.com/kr/main.do" className="btn-type1" target="_blank" rel="noreferrer">효성화학</a>
                  </BtnArea>
                </Tooltip>
                <Link to="/works2" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
          {/* <!-- 넥센 --> */}
          <ScrollAnimation animateIn="fadeIn" offset={0}>
            <h3>넥센(現키움) 히어로즈 사이트 시스템 유지보수</h3>
            <div className="content">
              시스템 유지보수, 퍼블리싱 및 간단한 개발
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2016.07 ~ 2018.07</p>
              <BtnArea>
                <a href="https://www.heroesbaseball.co.kr/index.do" className="btn-type1" target="_blank" rel="noreferrer">사이트 바로가기</a>
                <Link to="/works1" className="btn-type1">기술서</Link>
              </BtnArea>
            </div>
          </ScrollAnimation>
        </BoxType>
      </SectionMain>
    </Layout>
  )
}

export default IndexPage