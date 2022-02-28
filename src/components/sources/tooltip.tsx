import React, { useEffect, useState } from 'react';
import { Button } from '../index';
import styled from 'styled-components';

interface DefaultTypes {
  children: React.ReactNode;
  text: string;
}

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

export default function Tooltip({ children, text }: DefaultTypes) {
  const [on, setOn] = useState(false);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOn(!on);
  };

  const closeAll = (e: any) => {
    if (!e.target.parentNode.getAttribute('data-tooltip')) setOn(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    };
  });

  return (
    <Tooltips data-tooltip="click" className={on ? 'on' : ''}>
      <Button href="#none" target="_blank" rel="noreferrer" onClick={e => toggle(e)}>
        {text}
      </Button>
      <div>{children}</div>
    </Tooltips>
  );
}
