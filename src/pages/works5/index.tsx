import React from 'react';
import { Layout, SectionType, FigureBox, ListDot } from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Kbcert1 from '../../resources/images/kbcert/kbcert1.png';
import Kbcert2 from '../../resources/images/kbcert/kbcert2.png';

// main
const IndexPage = () => {
  const list: Array<{title: string, content: string}> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2019.09 ~ 2020.03',
    },
  ];

  return (
    <Layout title="손기연 | KB국민은행_통합인증서">
      {/* KB국민은행 통합인증 */}
      <SectionType title="KB국민은행 차세대 통합인증서 플랫폼 구축">
        <ListDot>{list}</ListDot>
        <p>처음으로 혼자 파견 나가서 html 가이드부터 마지막까지 제 손으로 구현했고, 다른 개발팀과 직접적으로 협업하면서 스크립트를 비동기일 때 호출할 수 있도록 해야한다는걸 배웠던 프로젝트입니다.</p>
        <FigureBox>
          <figure>
            <a href={Kbcert1} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/kbcert/kbcert1.png" alt="통합인증 메인" />
            </a>
            <figcaption>KB 통합인증 메인 (목업이지만 혹시 몰라서 가립니다.)</figcaption>
          </figure>
          <figure>
            <a href={Kbcert2} target="_blank" rel="noreferrer">
              <StaticImage src="../../resources/images/kbcert/kbcert2.png" alt="통합인증 요소" />
            </a>
            <figcaption>KB 통합인증 중 하나 (목업이지만 혹시 몰라서 가립니다.)</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
