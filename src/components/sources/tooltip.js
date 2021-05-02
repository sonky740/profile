import React from "react";
import { ButtonType } from "../index";
import styled from "styled-components";

const Tooltips = styled.div`
  >div {
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
  
  &.active {
    
    >div {
      display: block;
      z-index: 10;
    }
  }
`

export default function Tooltip({ text, children }) {

  const handleTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.parentNode.classList.contains('active')) {
      e.target.parentNode.classList.remove('active');
    } else {
      e.target.parentNode.classList.add('active');
    }
  }

  return (
    <Tooltips data-tooltip="click">
      <ButtonType href="#none" target="_blank" rel="noreferrer" onClick={handleTooltip} >{text}</ButtonType>
      <div>{children}</div>
    </Tooltips>
  )
}