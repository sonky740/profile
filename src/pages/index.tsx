import React from 'react';
import {
  Layout,
  Tooltip,
  BtnArea,
  SectionMain,
  BoxWrap,
  Button,
  ButtonLink,
  LabelText,
  ScrollAni,
  ScrollDetail,
  AboutMe,
} from '../components/index';

// main
const IndexPage = () => {
  return (
    <Layout>
      {/* INTRO */}
      <ScrollDetail />
      {/* 소개 */}
      <SectionMain title="ABOUT ME">
        <AboutMe />
      </SectionMain>
      <SectionMain title="엑셈">
        <BoxWrap>
          {/* exemONE 개발 */}
          <ScrollAni>
            <h3>exemONE 개발</h3>
            <div className="content">
              exemONE 개발,
              <br />
              통합 대시보드 개발 vue + typescript
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2023.06 ~ </p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  관리자 사이트라 접근이 불가합니다.
                </Tooltip>
                <ButtonLink to="/works17">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 모바일 인터맥스 개발 */}
          <ScrollAni>
            <h3>모바일 인터맥스 개발</h3>
            <div className="content">
              모바일 인터맥스 개발,
              <br />
              기존의 senchaJS로 돼있던 모바일 인터맥스(WAS 모니터링 제품)를 vue
              기반으로 재개발
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2023.02 ~ 2023.05</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  관리자 사이트라 접근이 불가합니다.
                </Tooltip>
                <ButtonLink to="/works16">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 한국건강관리협회 대시보드 개발 */}
          <ScrollAni>
            <h3>한국건강관리협회 대시보드 개발</h3>
            <div className="content">
              한국건강관리협회 대시보드 개발,
              <br />
              Vite + Vue + pinia + typescript 기반으로한 대시보드 개발
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2022.12 ~ 2023.01</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  관리자 사이트라 접근이 불가합니다.
                </Tooltip>
                <ButtonLink to="/works15">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
        </BoxWrap>
      </SectionMain>
      <SectionMain title="민앤지">
        <BoxWrap>
          {/* 더쎈카드 운영 */}
          <ScrollAni>
            <h3>더쎈카드 운영</h3>
            <div className="content">
              더쎈카드 운영 및 고도화,
              <br />
              22년 8월 ~ React Native
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2022.04 ~ 2022.09</p>
              <BtnArea>
                <Button
                  href="https://thessencard.co.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works14">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 아파트청약케어 운영 */}
          <ScrollAni>
            <h3>아파트청약케어 운영</h3>
            <div className="content">아파트청약케어 운영 React(CRA)</div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2022.03 ~ 2022.09</p>
              <BtnArea>
                <Button
                  href="https://aptcare.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works13">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* Sheeeda 구축 */}
          <ScrollAni>
            <h3>Sheeeda 구축</h3>
            <div className="content">캠핑 Sheeeda 구축</div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2021.10 ~ 2021.12</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  프로젝트 드랍되었습니다.
                </Tooltip>
                <ButtonLink to="/works12">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* Tior 운영 */}
          <ScrollAni>
            <h3>Tior 운영</h3>
            <div className="content">Tior 운영 및 고도화 진행 중</div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2021.06 ~ 2022.09</p>
              <BtnArea>
                <Button
                  href="https://m.tior.co.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works11">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* PASS 운영 */}
          <ScrollAni>
            <h3>PASS 운영</h3>
            <div className="content">PASS 운영 및 고도화 진행 중</div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2021.06 ~ 2022.09</p>
              <BtnArea>
                <Button
                  href="https://www.sktpass.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works10">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
        </BoxWrap>
      </SectionMain>
      {/* 포폴 */}
      <SectionMain title="인픽스">
        <BoxWrap>
          {/* 우리은행 마이데이터 구축 */}
          <ScrollAni>
            <h3>
              우리은행 마이데이터 구축 <LabelText>접근성</LabelText>
            </h3>
            <div className="content">우리은행 마이데이터 구축</div>
            <div className="bottom">
              <p>역할: PA 70%</p>
              <p>기간: 2021.02 ~ 2021.05</p>
              <BtnArea>
                <Button
                  href="https://spot.wooribank.com/pot/Dream?withyou=my"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works9">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* KB국민은행 오픈뱅킹 고도화 */}
          <ScrollAni>
            <h3>
              KB국민은행 오픈뱅킹 고도화 <LabelText>접근성</LabelText>
            </h3>
            <div className="content">
              KB국민은행 오픈뱅킹(인터넷뱅킹, 스타뱅킹) 고도화,{' '}
              <a
                href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=11054"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                웹 어워드 대상
              </a>{' '}
              수상
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2020.11 ~ 2021.02</p>
              <BtnArea>
                <Button
                  href="https://obank.kbstar.com/quics?page=obank&QSL=F#loading"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works8">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 우리은행 WON기업뱅킹 앱 구축 */}
          <ScrollAni>
            <h3>
              우리은행 WON기업뱅킹 앱 구축 <LabelText>접근성</LabelText>
            </h3>
            <div className="content">
              새로운 WON기업뱅킹 앱 구축, 웹뷰 영역 작업
            </div>
            <div className="bottom">
              <p>역할: PA 80%</p>
              <p>기간: 2020.06 ~ 2020.09</p>
              <BtnArea>
                <Button
                  href="https://svc.wooribank.com/svc/Dream?withyou=SFSBK0003"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works7">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 고객언어솔루션 */}
          <ScrollAni>
            <h3>고객언어솔루션</h3>
            <div className="content">
              자사 자체 언어교정 솔루션으로 PC버전만 제작
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2020.04 ~ 2020.05</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">아직 오픈전입니다.</Tooltip>
                <ButtonLink to="/works6">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* KB국민은행 차세대 통합인증서 플랫폼 구축 */}
          <ScrollAni>
            <h3>KB국민은행 차세대 통합인증서 플랫폼 구축</h3>
            <div className="content">
              관리자 통합인증 부분을 독립사이트로 구축
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2019.09 ~ 2020.03</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  관리자 사이트라 접근이 불가합니다.
                </Tooltip>
                <ButtonLink to="/works5">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 포스코 차세대 MES 3.0 */}
          <ScrollAni>
            <h3>포스코 차세대 MES 3.0 시스템 UI 개선</h3>
            <div className="content">MES 시스템 React로 구축</div>
            <div className="bottom">
              <p>역할: PA 70%</p>
              <p>기간: 2019.01 ~ 2019.09</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  관리자 사이트라 접근이 불가합니다.
                </Tooltip>
                <ButtonLink to="/works4">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* KB국민은행 인뱅 */}
          <ScrollAni>
            <h3>
              KB국민은행 개인 인터넷뱅킹 리뉴얼 <LabelText>접근성</LabelText>
            </h3>
            <div className="content">
              KB국민은행 개인 인터넷뱅킹 리뉴얼 및 웹 접근성 취득,{' '}
              <a
                href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=9262"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                웹 어워드 최고 대상
              </a>{' '}
              수상
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2018.07 ~ 2018.11</p>
              <BtnArea>
                <Button
                  href="https://obank.kbstar.com/quics?page=obank"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works3">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 효성 */}
          <ScrollAni>
            <h3>
              효성그룹 및 계열사 홈페이지 리뉴얼 <LabelText>접근성</LabelText>
            </h3>
            <div className="content">
              효성그룹 사이트 수정 및 하위 4개 사이트 리뉴얼, 다국어 추가
            </div>
            <div className="bottom">
              <p>역할: PA 100%</p>
              <p>기간: 2018.03 ~ 2018.07</p>
              <BtnArea>
                <Tooltip text="사이트 바로가기">
                  <BtnArea>
                    <Button
                      href="http://www.hyosung.co.kr/kr/index.do"
                      target="_blank"
                      rel="noreferrer"
                    >
                      효성그룹
                    </Button>
                    <Button
                      href="http://www.hyosungtnc.com/kr/main.do"
                      target="_blank"
                      rel="noreferrer"
                    >
                      효성티앤씨
                    </Button>
                    <Button
                      href="http://www.hyosungheavyindustries.com/kr/main.do"
                      target="_blank"
                      rel="noreferrer"
                    >
                      효성중공업
                    </Button>
                    <Button
                      href="http://www.hyosungadvancedmaterials.com/kr/main.do"
                      target="_blank"
                      rel="noreferrer"
                    >
                      효성첨단소재
                    </Button>
                    <Button
                      href="http://www.hyosungchemical.com/kr/main.do"
                      target="_blank"
                      rel="noreferrer"
                    >
                      효성화학
                    </Button>
                  </BtnArea>
                </Tooltip>
                <ButtonLink to="/works2">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
          {/* 넥센 */}
          <ScrollAni>
            <h3>넥센(現키움) 히어로즈 사이트 시스템 유지보수</h3>
            <div className="content">
              시스템 유지보수, 퍼블리싱 및 간단한 개발
            </div>
            <div className="bottom">
              <p>역할: PL 100%</p>
              <p>기간: 2016.07 ~ 2018.07</p>
              <BtnArea>
                <Button
                  href="https://www.heroesbaseball.co.kr/index.do"
                  target="_blank"
                  rel="noreferrer"
                >
                  사이트 바로가기
                </Button>
                <ButtonLink to="/works1">기술서</ButtonLink>
              </BtnArea>
            </div>
          </ScrollAni>
        </BoxWrap>
      </SectionMain>
    </Layout>
  );
};

export default IndexPage;
