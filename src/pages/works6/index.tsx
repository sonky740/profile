import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Jamo1 from '../../resources/images/jamo/jamo1.png';
import Jamo2 from '../../resources/images/jamo/jamo2.png';
import Jamo3 from '../../resources/images/jamo/jamo3.png';

// main
const IndexPage = () => {
  const list: Array<{ title: string; content: string }> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2020.04 ~ 2020.05',
    },
  ];

  return (
    <Layout title="손기연 | 고객언어솔루션">
      {/* 고객언어솔루션 */}
      <SectionType title="고객언어솔루션">
        <ListDot>{list}</ListDot>
        <p>
          2번째로 혼자서한 프로젝트로 인픽스 언어교정 솔루션 프로젝트입니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Jamo1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/jamo/jamo1.png"
                alt="자모 메인"
                placeholder="blurred"
              />
            </a>
            <figcaption>메인 페이지</figcaption>
          </figure>
          <figure>
            <a href={Jamo2} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/jamo/jamo2.png"
                alt="자모 네비게이션"
                placeholder="blurred"
              />
            </a>
            <figcaption>네비게이션을 열었을 때</figcaption>
          </figure>
          <figure>
            <a href={Jamo3} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/jamo/jamo3.png"
                alt="자모 콘텐츠 교정"
                placeholder="blurred"
              />
            </a>
            <figcaption>콘텐츠 교정 페이지</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
