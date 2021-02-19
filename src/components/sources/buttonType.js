import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  position: relative;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #ffbd39;
  border-radius: 24px;
  font-size: 14px;
  transition: all .5s ease;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150px;
    width: 100%;
    height: 100%;
    background: #ffbd39;
    transition: all .5s ease;
    z-index: -1;
  }

  & + & {
    margin-left: 4px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #000;
    &:before {
      left: 0;
    }
  }
`

export default function ButtonType({children, href, to, target, rel, onClick}) {
  return (
    <Button href={href} to={to} target={target} rel={rel} onClick={onClick}>{children}</Button>
  )
}