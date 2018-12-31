import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import Centered from '../components/Centered';
import Icons from '../components/Icons';
import Layout from '../components/Layout';
import ThingsAboutMeBlackboard from '../components/ThingsAboutMeBlackboard';

import deskImageSrc from '../images/desk.jpg';
import meCompImageSrc from '../images/me_comp.jpg';

const IndexPage = () => (
  <Layout>
    <Grid>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Image fluid src={deskImageSrc} />
          <Centered heightOffset={100}>
            <h1>Steven Liao</h1>
            <Icons />
          </Centered>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Image fluid src={meCompImageSrc} />
        </Grid.Column>
        <Grid.Column>
          <ThingsAboutMeBlackboard />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage;
