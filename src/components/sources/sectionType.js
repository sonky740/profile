import React from "react";
import styled from "styled-components";

// 버튼 영역 지정
const Section = styled.section`
  >h2 {
    font-size: 20px;
    color: #ffbd39;
    margin-bottom: 16px;
  }
  >p {
    color: #bebebe;
    margin-bottom: 16px;

    a {
      color: #fff;
      text-decoration: underline;
    }
  }
`

export default function SectionType({title, children}) {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  )
}