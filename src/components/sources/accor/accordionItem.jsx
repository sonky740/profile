import React from "react";
import styled from "styled-components";

const AccordionItem = styled.div`
  & + & {
    margin-top: 8px;
  }
`;

const AccordionTitle = styled.div`
  position: relative;

  > button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 30px;
      width: 9px;
      height: 2px;
      background: #fff;
      border-radius: 2px;
      transform: translateY(-50%) rotate(45deg);
      transition: transform 0.3s;
    }

    &:after {
      right: 24px;
      transform: translateY(-50%) rotate(135deg);
    }

    &.on {
      &:before {
        transform: translateY(-50%) rotate(-45deg);
      }

      &:after {
        transform: translateY(-50%) rotate(225deg);
      }
    }
  }
`;

const AccordionContent = styled.div`
  display: none;

  &.showing,
  &.hiding {
    display: block;
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
  }

  &.shown {
    display: block;
  }

  &.hidden {
    display: none;
  }
`;

const AccordionBody = styled.div`
  padding: 16px;
`;

export default function AccordionItemWrap({ index, title, children, handleClick, trigger }) {
  return (
    <AccordionItem id={index} key={index}>
      <AccordionTitle>
        <div>{title}</div>
        <button type="button" onClick={handleClick} className={trigger ? "on" : ""}>
          <span className="blind">펼치기</span>
        </button>
      </AccordionTitle>
      <AccordionContent>
        <AccordionBody>{children}</AccordionBody>
      </AccordionContent>
    </AccordionItem>
  );
}
