import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import sheeeda1 from '../../resources/images/sheeeda/sheeeda1.png';
import sheeeda2 from '../../resources/images/sheeeda/sheeeda2.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2021.10 ~ 2021.12',
    },
    {
      title: '사용 기술',
      content: 'html, scss, javascript',
    },
  ];

  return (
    <Layout title="손기연 | Sheeeda">
      {/* Sheeeda */}
      <SectionType title="Sheeeda">
        <ListDot>{list}</ListDot>
        <p>
          민앤지 입사 후 첫 구축 프로젝트. 기존 사내 프로젝트들이 가이드,
          산출물이 미흡하여 해당 프로젝트로 방향성을 제시하려 하고 다양한 스크롤
          이벤트와 추후에 typescript도 적용하고 싶었으나, 사업부 문제로 인하여
          프로젝트 드랍.
        </p>
        <FigureBox>
          <figure>
            <a href={sheeeda1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/sheeeda/sheeeda1.png"
                alt="캠핑장 지도"
                placeholder="blurred"
              />
            </a>
            <figcaption>캠핑장 지도</figcaption>
          </figure>
          <figure>
            <a href={sheeeda2} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/sheeeda/sheeeda2.png"
                alt="캠핑장 상세"
                placeholder="blurred"
              />
            </a>
            <figcaption>캠핑장 상세</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
