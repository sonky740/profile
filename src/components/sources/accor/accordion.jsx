import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AccordionItemWrap from "./accordionItem";

const Accordion = styled.div``;

const AccordionWrap = ({ children, only }) => {
  const target = useRef();

  const getID = () => {
    let expandedIndex = [];

    React.Children.map(children, (child, i) => {
      if (child.props.expanded) {
        expandedIndex.push(i);
      }
    });

    return expandedIndex;
  };

  const [activedIndex, setActivedIndex] = useState(getID);

  const handleClick = (acdID) => {
    let activedList = [...activedIndex];
    let activedItem = activedIndex.indexOf(acdID);

    if (only) {
      if (activedItem !== -1) {
        activedList.splice(activedItem, 1);
        setActivedIndex(activedList);
      } else {
        setActivedIndex([acdID]);
      }
    } else {
      if (activedItem !== -1) {
        activedList.splice(activedItem, 1);
        setActivedIndex(activedList);
      } else {
        setActivedIndex([...activedList, acdID]);
      }
    }
  };

  const isButton = (acdID) => {
    if (activedIndex.includes(acdID)) {
      return "on";
    } else {
      return "";
    }
  };

  const isContent = (acdID) => {
    if (activedIndex.includes(acdID)) {
      return "shown";
    } else {
      return "hidden";
    }
  };

  useEffect(() => {});

  // 자식 컴포넌트 생성
  let childArr = children;
  if (childArr.length === undefined) {
    childArr = [children];
  }
  const items = childArr.map((child, i) => {
    return React.cloneElement(child, {
      key: i,
      index: i,
      handleClick: handleClick,
      isButton: isButton,
      isContent: isContent,
    });
  });

  return <Accordion only={only}>{items}</Accordion>;
};

AccordionWrap.Item = AccordionItemWrap;

export default AccordionWrap;
