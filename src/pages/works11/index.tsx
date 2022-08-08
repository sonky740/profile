import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import tior1 from '../../resources/images/tior/tior1.png';
import tior2 from '../../resources/images/tior/tior2.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2021.06 ~ 진행 중',
    },
    {
      title: '사용 기술',
      content: 'html, scss, javascript',
    },
  ];

  const list2: Array<listType> = [
    {
      content: 'Accordion, Tab 등 UI Component 개선',
    },
    {
      content: '전기차 시승 구축',
    },
    {
      content: 'ZELLA EV 판매 및 시승 구축',
    },
    {
      content: 'PASS 자동차 연계',
    },
  ];

  return (
    <Layout title="손기연 | TIOR">
      {/* TIOR */}
      <SectionType title="TIOR">
        <ListDot>{list}</ListDot>
        <p>
          자사 첫 플랫폼 서비스인 시승 어플입니다. 다행히 개발자들과 뜻이 맞아
          기존 소스를 개선할 수 있었고, 고도화를 진행하면서 운영보단 구축에
          가까운 형태라서 늘 하는 보람이 있는 프로젝트입니다.
        </p>
        <ListDot className="type1">{list2}</ListDot>
        <FigureBox>
          <figure>
            <a href={tior1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/tior/tior1.png"
                alt="전기차 시승"
                placeholder="blurred"
              />
            </a>
            <figcaption>전기차 시승</figcaption>
          </figure>
          <figure>
            <a href={tior2} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/tior/tior2.png"
                alt="PASS 자동차"
                placeholder="blurred"
              />
            </a>
            <figcaption>PASS 자동차</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
