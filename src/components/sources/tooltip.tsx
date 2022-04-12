import React, { useEffect, useState, useRef } from 'react';
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
    animation: tooltip .3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  &.shown {
    > div {
      display: block;
      z-index: 10;
    }
  }

  @keyframes tooltip {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1)
    }
  }
`;

export default function Tooltip({ children, text }: DefaultTypes) {
  const [on, setOn] = useState(false);
  const tooltip: React.MutableRefObject<HTMLDivElement> = useRef();

  const tooltipHandler = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <Tooltips data-tooltip ref={tooltip} className={on ? 'shown' : ''}>
      <Button href="#none" target="_blank" rel="noreferrer" onClick={tooltipHandler}>
        {text}
      </Button>
      <div>{children}</div>
    </Tooltips>
  );
}
