import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import Heroes1 from '../../resources/images/heroes/heroes1.png';
import Heroes2 from '../../resources/images/heroes/heroes2.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2016.07 ~ 2018.07',
    },
    {
      title: '사용 기술',
      content: 'Linux, MySqL, JAVA, html, css, javascript(jquery)'
    },
  ];

  return (
    <Layout title="손기연 | 키움">
      {/* 키움 */}
      <SectionType title="넥센(現키움) 히어로즈 사이트 시스템 유지보수">
        <ListDot>{list}</ListDot>
        <p>
          입사한 지 3개월 좀 지나서 사내 인프라 업무만 하던 저에게 히어로즈
          운영을 제안하셨고, 저는 기회다 싶어서 수락하였습니다.
        </p>
        <p>
          혼자 사이트 전체 운영을 맡은거라서 백단(MySQL, Linux, JAVA),
          프론트단(html, css, javascript(jquery))을 조금씩 하였습니다.
        </p>
        <p>
          기획자, 디자이너 없이 필요에따라 요청하였고 클라이언트와 소통을
          직접하여 의사소통 문제 없이 빠른 해결이 가능하였습니다.
        </p>
        <p>이 프로젝트를 시작으로 코딩이라는걸 배워나갔습니다.</p>
        <FigureBox>
          <figure>
            <a href={Heroes1} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/heroes/heroes1.png"
                alt="넥센히어로즈 시절 이미지"
                placeholder="blurred"
              />
            </a>
            <figcaption>넥센히어로즈 시절</figcaption>
          </figure>
          <figure>
            <a href={Heroes2} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/heroes/heroes2.png"
                alt="키움히어로즈 이미지"
                placeholder="blurred"
              />
            </a>
            <figcaption>2018년 리뉴얼 후 키움히어로즈 시절</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
