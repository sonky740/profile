import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface ButtonTypes {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface LinkTypes {
  children: React.ReactNode;
  to: string;
}

const Btn = styled.a`
  display: inline-block;
  position: relative;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  border: 1px solid #ffbd39;
  border-radius: 2.4rem;
  font-size: 1.4rem;
  transition: all 0.5s ease;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffbd39;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    z-index: -1;
  }

  & + & {
    margin-left: 0.4rem;
  }

  &.active,
  &:hover,
  &:focus {
    color: #000;
    &:before {
      transform: translateX(0);
    }
  }
`;

const LinkStyled = Btn.withComponent(Link);

export function Button({ children, href, target, rel, onClick }: ButtonTypes) {
  return (
    <Btn href={href} target={target} rel={rel} onClick={onClick}>
      {children}
    </Btn>
  );
}

export function ButtonLink({ children, to }: LinkTypes) {
  return <LinkStyled to={to}>{children}</LinkStyled>;
}
