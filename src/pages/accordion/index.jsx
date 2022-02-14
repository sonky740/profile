import React from 'react';
import { AccordionItem, Layout, SectionMain, Accor } from '../../components/index.jsx';

// main
const TestPage = () => {
  return (
    <Layout>
      <SectionMain title="테스트">
        <AccordionItem title="아코디언 타이틀">ㅁㄴㅇㄹ</AccordionItem>
        <AccordionItem title="아코디언 타이틀2">ㅁㄴㅇㄹ</AccordionItem>
        <AccordionItem title="아코디언 타이틀3">ㅁㄴㅇㄹ</AccordionItem>
        <AccordionItem title="아코디언 타이틀4">ㅁㄴㅇㄹ</AccordionItem>
        <br />
        <br />
        <br />
        <br />
        <Accor multiple={true}>
          <Accor.Item expanded={true} title="아코디언 타이틀1">
            내용
          </Accor.Item>
          <Accor.Item title="아코디언 타이틀2">내용</Accor.Item>
        </Accor>

        <Accor multiple={false}>
          <Accor.Item title="아코디언 타이틀3">내용</Accor.Item>
          <Accor.Item title="아코디언 타이틀4">내용</Accor.Item>
        </Accor>
      </SectionMain>
    </Layout>
  );
};

export default TestPage;
