import React from 'react';
import { Layout, SectionType, FigureBox } from '../../components/index.jsx';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Heroes1 from '../../images/heroes/heroes1.png';
import Heroes2 from '../../images/heroes/heroes2.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "heroes/heroes1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "heroes/heroes2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout align="center" title="손기연/키움">
      {/* 키움 */}
      <SectionType title="넥센(現키움) 히어로즈 사이트 시스템 유지보수">
        <p>
          넥센 히어로즈 현업 마케팅 담당자와의 원활한 소통,
          <br />
          혼자서 서버부터 앞 단까지 하다 보니 의사소통 문제 없이 빠른 해결 가능하였습니다.
          <br />
          이때부터 여러가지 언어를 배우고자 노력하였습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Heroes1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="넥센히어로즈 시절 이미지" />
            </a>
            <figcaption>넥센히어로즈 시절</figcaption>
          </figure>
          <figure>
            <a href={Heroes2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="키움히어로즈 이미지" />
            </a>
            <figcaption>2018년 리뉴얼 후 키움히어로즈 시절</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
