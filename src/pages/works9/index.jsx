import React from 'react';
import { Layout, SectionType, FigureBox } from '../../components/index.jsx';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import woori1 from '../../images/woori_mydata/woori1.png';
import woori2 from '../../images/woori_mydata/woori2.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "woori_mydata/woori1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "woori_mydata/woori2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout align="center" title="손기연/우리은행_마이데이터">
      {/* 우리은행 마이데이터 구축 */}
      <SectionType title="우리은행 마이데이터 구축">
        <p>bootstrap 5.0의 javascript를 참고 및 활용하여 UI script를 좀 더 효율적으로 짤 수 있게된 프로젝트였습니다. 여기서 배운걸 가지고 현재 제 Guide를 만들고 있습니다.</p>
        <FigureBox>
          <figure>
            <a href={woori1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="코치 메인(미래의 나)" />
            </a>
            <figcaption>코칭 메인(미래의 나)</figcaption>
          </figure>
          <figure>
            <a href={woori2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="고수의랭킹_투자고수" />
            </a>
            <figcaption>고수의랭킹 투자고수</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
