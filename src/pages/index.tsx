import * as React from 'react';
import '../styles/index.scss';
import Layout from '../components/layout';
import About from '../components/About/About';

const IndexPage: React.FC = () => {
  return (
    <>
      <Layout pageTitle="Домашняя страница">
        <About />
      </Layout>
    </>
  );
};

export default IndexPage;
