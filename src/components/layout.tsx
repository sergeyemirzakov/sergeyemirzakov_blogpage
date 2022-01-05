import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useStaticQuery, graphql } from 'gatsby';

interface LayoutTypes {
  pageTitle?: string;
}

const Layout: React.FC<LayoutTypes> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>
          {data.site.siteMetadata.title} — {pageTitle}
        </title>
      </Helmet>
      <div className="container">
        <div className="content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
