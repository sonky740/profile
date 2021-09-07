import React from "react";
import styled from "styled-components";

const Accordion = styled.div`
  
`

export default function AccordionWrap({ children }) {

  return (
    <Accordion>
      {children}
    </Accordion>
  )
}