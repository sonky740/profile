import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Hyosung1 from '../../resources/images/hyosung/hyosung1.png';
import Hyosung2 from '../../resources/images/hyosung/hyosung2.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PA 100%',
    },
    {
      title: '기간',
      content: '2018.03 ~ 2018.07',
    },
    {
      title: '사용 기술',
      content: 'html, scss, javascript(jquery)'
    }
  ];

  return (
    <Layout title="손기연 | 효성">
      {/* 효성 */}
      <SectionType title="효성그룹 및 계열사 홈페이지 리뉴얼">
        <ListDot>{list}</ListDot>
        <p>FrontEnd Development Group으로 옮기고 나서 첫 프로젝트였습니다.</p>
        <p>
          효성그룹 및 하위(티앤씨, 중공업, 첨단소재, 화학) 4개 사이트, 대략
          1000페이지의 방대한 적응형 사이트를 팀원들과 협업하여 여러 명이 작업할 때의
          방식과 소통의 중요성을 배웠던 프로젝트였습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Hyosung1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/hyosung/hyosung1.png"
                alt="효성중공업"
                placeholder="blurred"
              />
            </a>
            <figcaption>
              당시 구축했던 효성그룹 및 하위 사이트 4개중 중공업부문
            </figcaption>
          </figure>
          <figure>
            <a href={Hyosung2} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/hyosung/hyosung2.png"
                alt="효성중공업 협력업체 동반성장"
                placeholder="blurred"
              />
            </a>
            <figcaption>효성중공업 협력업체 동반성장 사이트</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
