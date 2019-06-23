import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

import 'semantic-ui-css/semantic.min.css';

const Main = styled.main`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 0;
`;

const siteMetadataQuery = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const data = useStaticQuery(siteMetadataQuery);

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Steven Liao website' },
          { name: 'keywords', content: 'website, react, portfolio' },
        ]}
      >
        <html lang="en" />
        <link rel="icon" href="src/images/rubiks-cube-256.png" />
      </Helmet>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default Layout;
