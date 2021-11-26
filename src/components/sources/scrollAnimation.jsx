import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// 버튼 영역 지정
const ScrollAni = styled.div`
    opacity: 0;
    visibility: hidden;
    transform: translateY(3rem);
    transition: all .5s;

    &.focus-in {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

export default function ScrollAniType({ multiple = 0.8, children }) {
  const target = useRef();

  const handleScroll = () => {
    let itemTop  = target.current.getBoundingClientRect().top;
    let viewH = document.documentElement.offsetHeight;

    if(itemTop < viewH * multiple && !target.current.classList.contains('focus-in')) {
        target.current.classList.add('focus-in');
    } else if (itemTop > viewH * 3 / 4 && target.current.classList.contains('focus-in')) {
        target.current.classList.remove('focus-in');
    }
  };

  useEffect(() => {
    handleScroll();
    ["resize", "scroll"].forEach(function(events) {
        window.addEventListener(events, handleScroll);
    })
  });

  return <ScrollAni ref={target} multiple={multiple}>{children}</ScrollAni>;
}
