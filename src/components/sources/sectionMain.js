import React from "react";
import styled from "styled-components";

const Section = styled.section`
  h2 {
    position: relative;
    font-size: 48px;
    margin-bottom: 24px;
    text-align: center;

    &:before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      font-size: 70px;
      color: rgba(255, 255, 255, 0.15);
      z-index: -1;
      font-weight: 900;

      @media screen and (max-width: 640px) {
        content: "";
      }
    }
  }
`

export default function SectionMain({title, children}) {
  return (
    <Section>
      <h2 data-text={title}>{title}</h2>
      {children}
    </Section>
  )
}
