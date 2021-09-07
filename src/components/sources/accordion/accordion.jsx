import React from "react";
import styled from "styled-components";
import AccordionItem from "./accordionItem";

const Accordion = styled.div`
  
`

export default function AccordionWrap(props, { children }) {

  return (
    <Accordion>
      {children}
    </Accordion>
  )
}