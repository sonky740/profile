import React from 'react';
import {
  Layout,
  SectionType,
  FigureBox,
  ListDot,
} from '../../components/index';
import { StaticImage } from 'gatsby-plugin-image';
import mobileIntermax from '../../resources/images/mobile_intermax/mobile_intermax.png';

// main
const IndexPage = () => {
  const list: Array<listType> = [
    {
      title: '역할',
      content: 'PA 100%',
    },
    {
      title: '기간',
      content: '2023.02 ~ 2023.05',
    },
    {
      title: '사용 기술',
      content: 'Vue3, Pinia, Vite, Typescript',
    },
  ];

  return (
    <Layout title="손기연 | 모바일 인터맥스 개발">
      {/* 모바일 인터맥스 개발 */}
      <SectionType title="모바일 인터맥스 개발">
        <ListDot>{list}</ListDot>
        <p>
          기존의 senchaJS로 돼있던 모바일 인터맥스(WAS 모니터링 제품)를 vue
          기반으로 재개발.
        </p>
        <p>
          <br />
          수십만개의 데이터를 다뤄야했기에 스크립트 최적화가 필수였고, 코드의
          가독성보단 속도를 중요시한 스크립트를 짰습니다.(ex: es6의 반복문들보다
          원시 반복문 for 사용)
          <br />
          로그인을 제외한 모든 부분을 웹뷰로 만들었고, 앱처럼 작동되면 좋았기에
          뒤로가기 버튼에 모달이 닫히거나 Tab에서 빠져나오는 등, 유저
          인터랙션에도 많은 신경을 썼습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={mobileIntermax} target="_blank" rel="noreferrer">
              <StaticImage
                src="../../resources/images/mobile_intermax/mobile_intermax.png"
                alt="모바일 인터맥스 개발 프로토타입"
                placeholder="blurred"
              />
            </a>
            <figcaption>모바일 인터맥스 개발 프로토타입</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
