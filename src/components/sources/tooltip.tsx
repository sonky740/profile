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
    animation: tooltip-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  &.shown {
    > div {
      display: block;
      z-index: 10;
    }
  }

  &.hidden {
    > div {
      display: block;
      z-index: 10;
      animation: tooltip-out 0.3s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
    }
  }

  @keyframes tooltip-in {
    0% {
      transform: translateY(25%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes tooltip-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }

    100% {
      transform: translateY(25%);
      opacity: 0;
    }
  }
`;

export default function Tooltip({ children, text }: DefaultTypes) {
  const [isTooltip, setIsTooltip] = useState(false);
  const tooltip = useRef()as React.MutableRefObject<HTMLDivElement>;

  const tooltipHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTooltip(true);
  };

  const closeAll = (e: any) => {
    if (e.target.parentNode !== tooltip.current) {
      tooltip.current.classList.remove('shown');
      tooltip.current.classList.add('hidden');
    }
  };

  const animationend = () => {
    if (tooltip.current.classList.contains('hidden')) setIsTooltip(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeAll);

    return () => {
      window.removeEventListener('click', closeAll);
    };
  }, []);

  useEffect(() => {
    tooltip.current.addEventListener('animationend', () => {
      animationend();
      tooltip.current.removeEventListener('animationend', animationend);
    });
  }, [isTooltip]);

  return (
    <Tooltips ref={tooltip} className={isTooltip ? 'shown' : ''}>
      <Button
        href="#none"
        target="_blank"
        rel="noreferrer"
        onClick={tooltipHandler}
      >
        {text}
      </Button>
      {isTooltip && <div>{children}</div>}
    </Tooltips>
  );
}
