import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import GlobalStyle from './GlobalStyle';

import 'semantic-ui-css/semantic.min.css';

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

// const GlobalStyle = createGlobalStyle`
//   :root {
//     --head-font: 'Patua One', sans-serif;
//     --body-font: 'Open Sans', sans-serif;

//     --large-font-size  : 18px;
//     --medium-font-size : 16px;
//     --small-font-size  : 14px;

//     --beige: #e3c691;
//     --beige-green: #dee7c6;
//     --chalk-gray: #515156;
//     --dark-green: #053b00;
//     --dark-green2: #01260c;
//     --light-blue: #4dd0e1;
//     --light-green: #28dc18;
//     --green: #19b76e;
//     --silver: #c0c0c0;
//   }

//   body {
//     color: var(--beige-green) !important;
//   }
// `;

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
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
    )}
  />
);

export default Layout;
