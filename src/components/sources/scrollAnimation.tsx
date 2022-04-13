import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children: React.ReactNode;
  multiple?: number;
}

// 버튼 영역 지정
const ScrollAni = styled.div`
  opacity: 0;
  visibility: hidden;
  transform: translateY(3rem);
  transition: all 0.5s;

  &.focus-in {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export default function ScrollAniType({
  children,
  multiple = 0.8,
}: DefaultTypes) {
  const target = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect((): any => {
    if (!target.current) return false;

    // init
    handleScroll();

    // add Event
    ['resize', 'scroll'].forEach(function (events) {
      window.addEventListener(events, handleScroll);
    });

    // remove Event
    return () => {
      ['resize', 'scroll'].forEach(function (events) {
        window.removeEventListener(events, handleScroll);
      });
    };
  });

  const handleScroll = () => {
    let itemTop = target.current.getBoundingClientRect().top;
    let viewH = document.documentElement.offsetHeight;

    if (
      itemTop < viewH * multiple &&
      !target.current.classList.contains('focus-in')
    ) {
      target.current.classList.add('focus-in');
    } else if (
      itemTop > (viewH * 3) / 4 &&
      target.current.classList.contains('focus-in')
    ) {
      target.current.classList.remove('focus-in');
    }
  };

  return <ScrollAni ref={target}>{children}</ScrollAni>;
}
