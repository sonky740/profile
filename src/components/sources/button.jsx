import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

export default function Button({ as, children, href, to, target, rel, onClick }) {
  return (
    <>
      {as === 'Link' ? (
        <LinkStyled to={to}>{children}</LinkStyled>
      ) : (
        <Btn href={href} target={target} rel={rel} onClick={onClick}>
          {children}
        </Btn>
      )}
    </>
  );
}
