import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import thessen_mobile from '../../resources/images/thessen/thessen_mobile.png';
import thessen_pc from '../../resources/images/thessen/thessen_pc.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2022.04 ~ 진행 중',
    },
    {
      title: '사용 기술',
      content: 'html, css, javascript, React Native',
    },
  ];

  const list2: Array<listType> = [
    {
      content: '메인 리뉴얼',
    },
    {
      content: '8월부터 더쎈카드 앱을 맡으면서 React Native 활용',
    },
  ];

  return (
    <Layout title="손기연 | 더쎈카드">
      {/* 더쎈카드 */}
      <SectionType title="더쎈카드">
        <ListDot>{list}</ListDot>
        <p>
          기존에 운영하던 빅쏠을 익수하면서 홈페이지 운영, 프로모션 위주의
          간단한 페이지를 작업하다가 8월부터는 더쎈카드 어플의 프론트엔드(React
          Native)를 맡게 되었습니다.
        </p>
        <ListDot className="type1">{list2}</ListDot>
        <FigureBox>
          <figure>
            <a href={thessen_mobile} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/thessen/thessen_mobile.png"
                alt="더쎈카드 홈페이지 모바일 메인"
                placeholder="blurred"
              />
            </a>
            <figcaption>더쎈카드 홈페이지 모바일 메인</figcaption>
          </figure>
          <figure>
            <a href={thessen_pc} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/thessen/thessen_pc.png"
                alt="더쎈카드 홈페이지 PC 메인"
                placeholder="blurred"
              />
            </a>
            <figcaption>더쎈카드 홈페이지 PC 메인</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
