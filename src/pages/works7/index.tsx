import React from 'react';
import { Layout, SectionType, FigureBox, ListDot } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Woori1 from '../../resources/images/woori_won/woori1.png';
import Woori2 from '../../resources/images/woori_won/woori2.png';
import Woori3 from '../../resources/images/woori_won/woori3.png';

// main
const IndexPage = () => {
  const list: Array<{title: string, content: string}> = [
    {
      title: '역할',
      content: 'PA 80%',
    },
    {
      title: '기간',
      content: '2020.06 ~ 2020.09',
    },
  ];

  return (
    <Layout title="손기연 | 우리은행_WON기업뱅킹">
      {/* 우리은행 */}
      <SectionType title="우리은행 WON기업뱅킹 앱 구축">
        <ListDot>{list}</ListDot>
        <p>모바일 앱에 들어가는 웹뷰를 처음으로 작업하였고,<br />접근성을 신경써야했는데, 느슨했던 PC와 달리 모바일에선 aria태그를 적극적으로 사용했었고, 다양한 인터랙션 관련 css와 css변수를 많이 배웠던 프로젝트입니다.</p>
        <FigureBox>
          <figure>
            <a href={Woori1} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/woori_won/woori1.png" alt="작업당시 일부분" />
            </a>
            <figcaption>작업당시 일부분</figcaption>
          </figure>
          <figure>
            <a href={Woori2} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/woori_won/woori2.png" alt="작업당시 일부분" />
            </a>
            <figcaption>작업당시 일부분</figcaption>
          </figure>
          <figure>
            <a href={Woori3} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/woori_won/woori3.png" alt="실서버" />
            </a>
            <figcaption>실서버</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
