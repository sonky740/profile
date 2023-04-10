import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import kahp from '../../resources/images/kahp/kahp.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2022.12 ~ 2023.01',
    },
    {
      title: '사용 기술',
      content: 'Vue3, Pinia, Vite, Typescript',
    },
  ];

  return (
    <Layout title="손기연 | 한국건강관리협회 대시보드">
      {/* 한국건강관리협회 대시보드 */}
      <SectionType title="한국건강관리협회 대시보드">
        <ListDot>{list}</ListDot>
        <p>
          vue + pinia + typescript를 기반으로한 WAS, DB 모니터링 대시보드를 개발.
        </p>
        <p>
          우리나라 지도를 SVG를 통해 뿌려서 클릭할 때마다 값이 바뀌고 심심하지
          않은 인터랙션이 들어가야 했습니다. Vue를 제외한 인터랙션 라이브러리
          없이 모든 걸 직접 구현하였습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={kahp} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/kahp/kahp.png"
                alt="한국건강관리협회 대시보드 프로토타입"
                placeholder="blurred"
              />
            </a>
            <figcaption>한국건강관리협회 대시보드 프로토타입</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
