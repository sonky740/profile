import { Link } from 'gatsby';
import React from 'react';
import { Layout, SectionMain } from '../../components/index';

// main
const TestPage = () => {
  return (
    <Layout>
      <SectionMain title="테스트">
        <Link to="/accordion">accordion</Link>
      </SectionMain>
    </Layout>
  );
};

export default TestPage;
