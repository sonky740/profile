import React from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children?: Array<{title:string, content: string}>;
}

const List = styled.ul`
  margin-bottom: 1.6rem;
  
  > li {
    font-size: 1.6rem;

    + li {
      margin-top: 0.4rem;
    }

    span {
      position: relative;
      display: inline-block;
      padding-left: 0.8rem;
      margin-right: 0.4rem;

      &:before {
        content: '';
        position: absolute;
        top: 0.6em;
        left: 0;
        width: 0.4rem;
        height: 0.4rem;
        background: #fff;
        border-radius: 50%;
      }
    }
  }
`;

export default function ListDot({ children }: DefaultTypes) {
  return (
    <List>
      {children.map((a: {title: string, content: string}, i: number) => {
        return (
          <li key={i}>
            <span>{a.title}: </span>
            {a.content}
          </li>
        );
      })}
    </List>
  );
}
