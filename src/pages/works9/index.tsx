import React from 'react';
import { Layout, SectionType, FigureBox, ListDot } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import woori1 from '../../resources/images/woori_mydata/woori1.png';
import woori2 from '../../resources/images/woori_mydata/woori2.png';

// main
const IndexPage = () => {
  const list: Array<{title: string, content: string}> = [
    {
      title: '역할',
      content: 'PA 70%',
    },
    {
      title: '기간',
      content: '2021.02 ~ 2021.05',
    },
  ];

  return (
    <Layout title="손기연 | 우리은행_마이데이터">
      {/* 우리은행 마이데이터 구축 */}
      <SectionType title="우리은행 마이데이터 구축">
        <ListDot>{list}</ListDot>
        <p>bootstrap 5.0의 javascript를 참고 및 활용하여 UI script를 좀 더 효율적으로 짤 수 있게된 프로젝트였습니다. 여기서 배운걸 가지고 현재 <a href="https://sonky740.github.io/Guide_es6/dist/html/" target="_blank" rel="noreferrer">제 Guide</a>를 만들고 있습니다.</p>
        <FigureBox>
          <figure>
            <a href={woori1} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/woori_mydata/woori1.png" alt="코치 메인(미래의 나)" />
            </a>
            <figcaption>코칭 메인(미래의 나)</figcaption>
          </figure>
          <figure>
            <a href={woori2} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/woori_mydata/woori2.png" alt="고수의랭킹_투자고수" />
            </a>
            <figcaption>고수의랭킹 투자고수</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
