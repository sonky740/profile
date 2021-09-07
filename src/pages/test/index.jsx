import React from "react";
import { Accordion, AccordionItem, Layout, SectionMain } from "../../components/index.jsx";

// main
const TestPage = () => {

  return (
    <Layout>
      <SectionMain title="테스트">
          <AccordionItem title="아코디언 타이틀">
            ㅁㄴㅇㄹ
          </AccordionItem>
          <AccordionItem title="아코디언 타이틀2">
            ㅁㄴㅇㄹ
          </AccordionItem>
          <AccordionItem title="아코디언 타이틀3">
            ㅁㄴㅇㄹ
          </AccordionItem>
          <AccordionItem title="아코디언 타이틀4">
            ㅁㄴㅇㄹ
          </AccordionItem>
        <Accordion>
        </Accordion>
      </SectionMain>
    </Layout>
  )
}

export default TestPage
