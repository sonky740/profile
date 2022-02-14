import React, { useEffect, useState } from 'react';
import { Btn } from '../index';
import styled from 'styled-components';

const Tooltips = styled.div`
  > div {
    position: absolute;
    display: none;
    left: 0;
    bottom: 4.8rem;
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #646464;
    border-radius: 0.8rem;
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
    if (!e.target.parentNode.getAttribute('data-tooltip')) setOn(null);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    };
  });

  return (
    <Tooltips data-tooltip="click" className={on ? 'on' : ''}>
      <Btn href="#none" target="_blank" rel="noreferrer" onClick={toggle}>
        {text}
      </Btn>
      <div>{children}</div>
    </Tooltips>
  );
}
