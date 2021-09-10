import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AccordionItemWrap from "./accordionItem";

const Accordion = styled.div``;

const AccordionWrap = ({ children }) => {
  const [trigger, setTrigger] = useState(false);

  const getID = () => {
    let expandedIndex = [];

    React.Children.map(children, (child, i) => {
      expandedIndex.push(i);
    });

    return expandedIndex;
  };

  const [activedIndex, setActivedIndex] = useState(getID);

  const handleClick = (acdID) => {
    // setTrigger(!trigger);
    let activedList = [...activedIndex];
    let activedItem = activedIndex.indexOf(acdID);
    console.log(activedIndex)

    if (activedItem !== -1) {
      activedList.splice(activedItem, 1);
      setActivedIndex(activedList);
    } else {
      setActivedIndex([...activedList, acdID]);
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
      trigger: trigger,
    });
  });

  return <Accordion>{items}</Accordion>;
};

AccordionWrap.Item = AccordionItemWrap;

export default AccordionWrap;
