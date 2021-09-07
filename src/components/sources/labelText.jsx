import React from "react";
import styled from "styled-components";

const LabelText = styled.span`
  display: inline-block;
  padding: 0 4px;
  line-height: 20px;
  background: #555;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 400;
  color: #fff;
  vertical-align: middle;
`;

export default function Label({ children }) {
  return <LabelText>{children}</LabelText>;
}
