import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Grid } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';

import Layout from '../components/layout';
import Icons from '../components/icons';
import desk from '../images/desk.jpg';

const ReactGridLayout = WidthProvider(Responsive);

const scaleBigger = keyframes`
  50% { transform: scale(1.2); }
`;

const IndexPage = () => (
  <Layout>
    <Grid>
      <Grid.Row className="background-desk">
        <div className="info text-center container">
          <img src={desk} width="100%" />
          <h1 className="margin">Steven Liao</h1>
          <Icons />
        </div>
      </Grid.Row>
      <Grid.Row className="pad">
        <div className="darkgreen2 container">
          <div className="col-sm-12">
            <h1 className="margin text-center">
              I&apos;m Steven, and I&apos;m a full stack developer.
            </h1>
          </div>
          <div className="col-sm-6 text-center">
            <img className="comp-image" src="/images/me_comp.jpg" alt="Computer.jpg" />
          </div>
          <div className="col-sm-6">
            <p>
              I am very passionate about software development and web development. My interest in
              software started since I was a little kid playing video games and surfing the web. The
              interest developed during my college years. I have made websites, web apps, games, and
              will continue to make more and explore newer technologies.
            </p>
            <div className="col-sm-4 pad text-center">
              <a className="link-button" href="/projects">
                View Projects
              </a>
            </div>
            <div className="col-sm-4 pad text-center">
              <a className="link-button" target="_blank" href="/files/pdf/StevenLiao_Resume.pdf">
                Resume
              </a>
            </div>
          </div>
        </div>
      </Grid.Row>
      <Grid.Row className="notes pad">
        <a href="notes">notes</a>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage;
