import React from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children: Array<listType>;
  className?: string;
}

const List = styled.ul`
  margin-bottom: 1.6rem;

  > li {
    position: relative;
    padding-left: 0.8rem;
    font-size: 1.6rem;
    color: #ddd;

    &:before {
      content: '';
      position: absolute;
      top: 0.6em;
      left: 0;
      width: 0.4rem;
      height: 0.4rem;
      background: #eee;
      border-radius: 50%;
    }

    + li {
      margin-top: 0.4rem;
    }

    span {
      display: inline-block;
      margin-right: 0.4rem;
      color: inherit;
    }
  }

  &.type1 {
    >li {
      color: #fff;

      &:before {
        background: #fff;
      }
    }
  }
`;

export default function ListDot({ children, className }: DefaultTypes) {
  return (
    <List className={className}>
      {children.map((list: listType) => {
        return (
          <li key={list.content}>
            {list.title && <span>{list.title}: </span>}
            {list.content}
          </li>
        );
      })}
    </List>
  );
}
