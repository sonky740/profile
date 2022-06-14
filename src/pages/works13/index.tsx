import React from 'react';
import { Layout, SectionType, FigureBox, ListDot } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import apt_mobile from '../../resources/images/apt/aptcare_mobile.png';
import apt_pc from '../../resources/images/apt/aptcare_pc.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2022.03 ~ 진행 중',
    },
    {
      title: '사용 기술',
      content: 'React(CRA), scss',
    },
  ];

  const list2: Array<listType> = [
    {
      content: '메인 개편'
    },
    {
      content: '이전 작업자가 탭 형식으로 작업하여 URL 구분이 안되어 GA 트래킹을 위한 react-router-dom의 hooks을 활용한 URL 구분',
    },
  ];

  return (
    <Layout title="손기연 | 아파트청약케어">
      {/* 아파트청약케어 */}
      <SectionType title="아파트청약케어">
        <ListDot>{list}</ListDot>
        <p>기존 백엔드 개발자가 프론트엔드까지 담당하였으나 퇴사로 인해 사내에서 리액트를 할줄 아는 제게 넘어왔고, 프론트엔드 작업 중입니다.</p>
        <ListDot className="type1">{list2}</ListDot>
        <FigureBox>
          <figure>
            <a href={apt_mobile} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/apt/aptcare_mobile.png" alt="아파트청약케어 앱 메인" placeholder="blurred" />
            </a>
            <figcaption>아파트청약케어 앱 메인</figcaption>
          </figure>
          <figure>
            <a href={apt_pc} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/apt/aptcare_pc.png" alt="아파트청약케어 앱 메인" placeholder="blurred" />
            </a>
            <figcaption>아파트청약케어 PC 메인</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
