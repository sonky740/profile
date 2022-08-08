import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Posco1 from '../../resources/images/posco/posco1.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PA 70%',
    },
    {
      title: '기간',
      content: '2019.01 ~ 2019.09',
    },
    {
      title: '사용 기술',
      content: 'React(CRA), scss'
    }
  ];

  return (
    <Layout title="손기연 | 포스코">
      {/* 포스코 */}
      <SectionType title="포스코 차세대 MES 3.0 시스템 UI 개선">
        <ListDot>{list}</ListDot>
        <p>
          React를 처음으로 접했고 기존에 jQuery를 쓰던 습관을 버리고 es6와
          React를 실무에 적용하기 위해 업무 시간 외에 스터디도 하면서 고생은
          많았지만 그만큼 보람찼고 재밌었던 프로젝트입니다.
        </p>
        <p>이 포트폴리오를 React로 짤 수 있게 해준 바탕이 된 프로젝트입니다.</p>
        <FigureBox>
          <figure>
            <a href={Posco1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/posco/posco1.png"
                alt="작업 중 일부분"
                placeholder="blurred"
              />
            </a>
            <figcaption>
              ag-grid 와 rechart를 활용한 페이지 (해당 프로젝트는{' '}
              <a
                href="https://create-react-app.dev/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                CRA
              </a>
              , class형으로 되어있습니다.)
            </figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
