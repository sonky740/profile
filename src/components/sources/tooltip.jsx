import React, { useEffect, useState } from "react";
import { ButtonType } from "../index";
import styled from "styled-components";

const Tooltips = styled.div`
  > div {
    position: absolute;
    display: none;
    left: 0;
    bottom: 48px;
    width: 100%;
    padding: 8px;
    border: 1px solid #646464;
    border-radius: 8px;
    background: #000;
    word-break: break-all;
  }

  &.on {
    > div {
      display: block;
      z-index: 10;
    }
  }
`;

export default function Tooltip({ text, children }) {
  const [on, setOn] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOn(!on);
  };

  const closeAll = (e) => {
    if (!e.target.parentNode.getAttribute("data-tooltip")) setOn(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    }
  });

  return (
    <Tooltips data-tooltip="click" className={on ? "on" : ""}>
      <ButtonType
        href="#none"
        target="_blank"
        rel="noreferrer"
        onClick={toggle}
      >
        {text}
      </ButtonType>
      <div>{children}</div>
    </Tooltips>
  );
}
