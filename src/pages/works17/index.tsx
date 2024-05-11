import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import exemONE from '../../resources/images/exemONE/exemONE.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PA 100%',
    },
    {
      title: '기간',
      content: '2023.06 ~ ',
    },
    {
      title: '사용 기술',
      content: 'Vue3, Pinia, Vite, Typescript',
    },
  ];

  const list2: Array<listType> = [
    {
      content:
        '프로젝트의 번들러를 webpack에서 vite로 마이그레이션하여 빌드 시간을 대폭 감소시키고 성능을 향상시킴',
    },
    {
      content:
        '상태 관리 시스템을 vuex에서 pinia로 전환, 현재 두 시스템을 혼용하는 단계에서 성능 및 유지보수 효율성을 개선 중.',
    },
    {
      content:
        '프론트엔드만 17명이 협업하며, 팀원 간 월활한 커뮤니케이션과 긴밀한 협력을 유도하여 팀의 업무 효율성과 사기를 향상시키는 동시에 개인의 관리 능력을 강화.',
    },
    {
      content: 'vue3 + typescript + scss 기반으로 개발 중',
    },
  ];

  return (
    <Layout title="손기연 | exemONE">
      {/* exemONE */}
      <SectionType title="exemONE">
        <ListDot>{list}</ListDot>
        <p>
          회사의 첫 통합 대시보드 제품 개발에 참여하여, 개발 초기부터 릴리즈 완료.
        </p>
        <ListDot className="type1">{list2}</ListDot>
        <FigureBox>
          <figure>
            <a href={exemONE} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/exemONE/exemONE.png"
                alt="exemONE 통합 대시보드"
                placeholder="blurred"
              />
            </a>
            <figcaption>exemONE 통합 대시보드</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
