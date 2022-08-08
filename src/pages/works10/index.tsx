import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import tpass from '../../resources/images/tpass/tpass.png';

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
      content: 'html, css, javascript',
    },
  ];

  return (
    <Layout title="손기연 | SKT PASS">
      {/* SKT PASS */}
      <SectionType title="SKT PASS">
        <ListDot>{list}</ListDot>
        <p>
          대규모로 운영되고 있는 어플이고, 기존 소스를 개선하려면 많은 인원이
          고생을 하기에, 개선보다는 현상을 유지하면서 안정적인 서비스를 목표로
          작업을 하였습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={tpass} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/tpass/tpass.png"
                alt="QR 인증 페이지"
                placeholder="blurred"
              />
            </a>
            <figcaption>QR 인증 페이지</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
