import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';

interface DefaultTypes {
  children: React.ReactNode;
  title: string;
  type?: string;
}

// 버튼 영역 지정
const Codes = styled.div`
  margin-top: 2.4rem;
  text-align: left;

  + .code {
    margin-top: 1.6rem;
  }

  pre {
    max-height: 400px;
  }
`;

export default function Code({ children, title, type }: DefaultTypes) {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });

  return (
    <Codes>
      <strong>{title}</strong>
      <pre className="line-numbers">
        <code className={type === 'js' ? 'language-js' : ''}>{children}</code>
      </pre>
    </Codes>
  );
}
