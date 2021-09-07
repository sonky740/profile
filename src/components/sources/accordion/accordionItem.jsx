import React, { useEffect, useRef, useState } from "react";
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

export default function AccordionItemWrap({ title, children }) {
  const [item, setItem] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [target, setTarget] = useState("hidden");
  const [transtion, setTranstion] = useState(false);
  const acTarget = useRef();

  const triggerClick = () => {
    if (transtion === false) {
      setItem(!item);
      setTrigger(!trigger);
      if (target === "hidden") {
        setTarget("showing");

        setTimeout(() => {
          acTarget.current.style.height =
            acTarget.current.children[0].clientHeight + "px";
        }, 0);
      } else if (target === "shown") {
        acTarget.current.style.height =
          acTarget.current.children[0].clientHeight + "px";
        setTarget("hiding");

        setTimeout(() => {
          acTarget.current.style.height = 0;
        }, 0);
      }
    }
  };

  useEffect(() => {
    acTarget.current.addEventListener("transitionstart", function () {
      setTranstion(true);
    });
    acTarget.current.addEventListener("transitionend", function (e) {
      if (target === "showing") {
        setTarget("shown");
      } else if (target === "hiding") {
        setTarget("hidden");
      }
      acTarget.current.removeAttribute("style");
      setTranstion(false);
    });
  });

  return (
    <AccordionItem className={item ? "on" : ""}>
      <AccordionTitle>
        <strong>{title}</strong>
        <button
          type="button"
          onClick={triggerClick}
          onKeyPress={triggerClick}
          className={trigger ? "on" : ""}
        >
          <span className="blind">펼치기</span>
        </button>
      </AccordionTitle>
      <AccordionContent ref={acTarget} className={target}>
        <AccordionBody>{children}</AccordionBody>
      </AccordionContent>
    </AccordionItem>
  );
}
