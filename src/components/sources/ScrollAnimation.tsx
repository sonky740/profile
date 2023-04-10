import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ScrollAniType {
  children: React.ReactNode;
  multiple?: number;
}

const ScrollAni: React.FC<ScrollAniType> = ({ children, multiple = 0.8 }) => {
  const target = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!target.current) return;

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

    const addEventListeners = () => {
      ['resize', 'scroll'].forEach(function (events) {
        window.addEventListener(events, handleScroll);
      });
    };

    const removeEventListeners = () => {
      ['resize', 'scroll'].forEach(function (events) {
        window.removeEventListener(events, handleScroll);
      });
    };

    handleScroll();

    addEventListeners();

    return removeEventListeners;
  }, []);

  return <ScrollAniSection ref={target}>{children}</ScrollAniSection>;
};

// 버튼 영역 지정
const ScrollAniSection = styled.div`
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

export default ScrollAni;
