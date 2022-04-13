import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Kbbanking1 from '../../resources/images/kbbanking/kb_banking.jpg';

// main
const IndexPage = () => {
  const list: Array<{ title: string; content: string }> = [
    {
      title: '역할',
      content: 'PA 100%',
    },
    {
      title: '기간',
      content: '2018.07 ~ 2018.11',
    },
  ];

  return (
    <Layout title="손기연 | KB국민은행_인뱅">
      {/* KB국민은행 인터넷뱅킹 */}
      <SectionType title="KB국민은행 개인 인터넷뱅킹 리뉴얼">
        <ListDot>{list}</ListDot>
        <p>
          금융권 첫 프로젝트, IE8까지 맞춰야하는 크로스 브라우징과 웹 접근성
          마크를 따야했기에 접근성 관련된 공부를 많이 하게된 프로젝트입니다.
        </p>
        <p>
          2019년에{' '}
          <a
            href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=9262"
            target="_blank"
            rel="noreferrer"
          >
            웹 어워드 최고 대상
          </a>
          을 수상했습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Kbbanking1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/kbbanking/kb_banking.jpg"
                alt="KB국민은행 개인 인터넷뱅킹 메인"
                placeholder="blurred"
              />
            </a>
            <figcaption>KB국민은행 개인 인터넷뱅킹 메인</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
