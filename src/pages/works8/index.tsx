import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import KbOpenbk1 from '../../resources/images/kbopenbk/kb_openbk1.png';
import KbOpenbk2 from '../../resources/images/kbopenbk/kb_openbk2.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PA 100%',
    },
    {
      title: '기간',
      content: '2020.11 ~ 2021.02',
    },
    {
      title: '사용 기술',
      content: 'html, css, javascript(jquery)',
    },
  ];

  return (
    <Layout title="손기연 | KB국민은행_오픈뱅킹">
      {/* KB국민은행 오픈뱅킹 */}
      <SectionType title="KB국민은행 오픈뱅킹 고도화">
        <ListDot>{list}</ListDot>
        <p>저축은행 및 증권사 79개가 추가됨으로 인한 인/스뱅 오픈뱅킹 고도화</p>
        <p>
          시각화(차트)가 중요시되는 프로젝트였는데 IE8 하위 버전에서 작동해야
          하고
          <br />웹 접근성을 맞춰야 하는 환경에서 차트의 구현 방식에 대해 많은 걸
          배웠던 프로젝트입니다.
          <br />
          2021년 12월{' '}
          <a
            href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=11054"
            target="_blank"
            rel="noreferrer"
          >
            웹 어워드 대상
          </a>
          을 탔습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={KbOpenbk1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/kbopenbk/kb_openbk1.png"
                alt="인터넷뱅킹 입출금 현황 퍼블 페이지"
                placeholder="blurred"
              />
            </a>
            <figcaption>인터넷뱅킹 입출금 현황 퍼블 페이지</figcaption>
          </figure>
          <figure>
            <a href={KbOpenbk2} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/kbopenbk/kb_openbk2.png"
                alt="인터넷뱅킹 자산현황 퍼블 페이지"
                placeholder="blurred"
              />
            </a>
            <figcaption>
              인터넷뱅킹 자산현황 퍼블 페이지 (
              <a
                href="http://demo.riamore.net/HTML5demo/chart/"
                target="_blank"
                rel="noreferrer"
              >
                rMate 차트
              </a>{' '}
              활용)
            </figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
