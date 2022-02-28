import React from 'react';
import { Layout, SectionType, FigureBox, ListDot } from '../../components/index';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
let Jamo1 = require('../../images/jamo/jamo1.png');
let Jamo2 = require('../../images/jamo/jamo2.png');
let Jamo3 = require('../../images/jamo/jamo3.png');

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "jamo/jamo1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file2: file(relativePath: { eq: "jamo/jamo2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file3: file(relativePath: { eq: "jamo/jamo3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const list: Array<{title: string, content: string}> = [
    {
      title: '역할',
      content: 'PL 100%',
    },
    {
      title: '기간',
      content: '2020.04 ~ 2020.05',
    },
  ];

  return (
    <Layout title="손기연 | 고객언어솔루션">
      {/* 고객언어솔루션 */}
      <SectionType title="고객언어솔루션">
        <ListDot>{list}</ListDot>
        <p>2번째로 혼자서한 프로젝트로 인픽스 언어교정 솔루션 프로젝트입니다.</p>
        <FigureBox>
          <figure>
            <a href={Jamo1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="자모 메인" />
            </a>
            <figcaption>메인 페이지</figcaption>
          </figure>
          <figure>
            <a href={Jamo2} target="_blank" rel="noreferrer">
              <Img fluid={data.file2.childImageSharp.fluid} alt="자모 네비게이션" />
            </a>
            <figcaption>네비게이션을 열었을 때</figcaption>
          </figure>
          <figure>
            <a href={Jamo3} target="_blank" rel="noreferrer">
              <Img fluid={data.file3.childImageSharp.fluid} alt="자모 콘텐츠 교정" />
            </a>
            <figcaption>콘텐츠 교정 페이지</figcaption>
          </figure>
        </FigureBox>
      </SectionType>
    </Layout>
  );
};

export default IndexPage;
