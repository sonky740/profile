import React from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children: React.ReactNode
}

const LabelText = styled.span`
  display: inline-block;
  padding: 0 0.4rem;
  line-height: 2rem;
  background: #555;
  border-radius: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  vertical-align: middle;
`;

export default function Label({ children }: DefaultTypes) {
  return <LabelText>{children}</LabelText>;
}
