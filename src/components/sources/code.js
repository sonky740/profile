import React, { useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";

// 버튼 영역 지정
const Codes = styled.div`
  margin-top: 24px;
  text-align: left;

  +.code {
    margin-top: 16px;
  }

  pre {
    max-height: 400px;
  }
`

export default function Code({title, children, type}) {

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  })

  return (
    <Codes>
      <strong>{title}</strong>
      <pre className="line-numbers">
        <code className={type === "js" ? "language-js" : ""}>
          {children}
        </code>
      </pre>
    </Codes>
  )
}