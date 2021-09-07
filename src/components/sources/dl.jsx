import React from "react";
import styled from "styled-components";

const DL = styled.dl`
  font-size: 16px;

  dt {
    position: relative;
    padding-left: 12px;
    color: #a1ff0b;

    &:before {
      content: "";
      position: absolute;
      top: 0.5em;
      left: 0;
      width: 6px;
      height: 6px;
      background: #a1ff0b;
      border-radius: 50%;
    }
  }

  dd {
    margin-top: 4px;
    padding-left: 12px;
    word-break: break-all;

    p {
      + p {
        margin-top: 4px;
      }
    }
  }

  & + & {
    margin-top: 16px;
  }
`;

export default function DefinitionList({ title, children }) {
  return (
    <DL>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </DL>
  );
}
