import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface ButtonType {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface LinkType {
  children: React.ReactNode;
  to: string;
}

export const Button: React.FC<ButtonType> = ({
  children,
  href,
  target,
  rel,
  onClick,
}) => {
  return (
    <Btn href={href} target={target} rel={rel} onClick={onClick}>
      {children}
    </Btn>
  );
};

export const ButtonLink: React.FC<LinkType> = ({ children, to }) => {
  return (
    <Btn as={Link} to={to}>
      {children}
    </Btn>
  );
};

const Btn = styled.a`
  display: inline-block;
  position: relative;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  border: 1px solid #ffbd39;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  transition: all 0.5s ease;
  overflow: hidden;

  & + & {
    margin-left: 0.4rem;
  }

  &.active,
  &:hover,
  &:focus {
    background: #ffbd39;
    color: #222;
  }
`;
