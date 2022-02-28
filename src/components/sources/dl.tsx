import React from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children: React.ReactNode;
  title: string;
}

const Dl = styled.dl`
  font-size: 1.6rem;

  dt {
    position: relative;
    padding-left: 1.2rem;
    color: #a1ff0b;

    &:before {
      content: '';
      position: absolute;
      top: 0.5em;
      left: 0;
      width: 0.6rem;
      height: 0.6rem;
      background: #a1ff0b;
      border-radius: 50%;
    }
  }

  dd {
    margin-top: 0.4rem;
    padding-left: 1.2rem;
    word-break: break-all;

    p {
      + p {
        margin-top: 0.4rem;
      }
    }
  }

  & + & {
    margin-top: 1.6rem;
  }
`;

export default function DefinitionList({ children, title }: DefaultTypes) {
  return (
    <Dl>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </Dl>
  );
}
