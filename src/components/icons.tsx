import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import withNewTab from './withNewTab';

const NewTabA = withNewTab('a');

const Icons = () => (
  <Grid columns="equal">
    <Grid.Column>
      <NewTabA href="https://github.com/penspinner" title="GitHub">
        <Icon name="github square" size="big" />
      </NewTabA>
    </Grid.Column>
    <Grid.Column>
      <NewTabA href="https://linkedin.com/in/stliao" title="LinkedIn">
        <Icon name="linkedin square" size="big" />
      </NewTabA>
    </Grid.Column>
    <Grid.Column>
      <NewTabA href="https://youtube.com/32309" title="YouTube">
        <Icon name="youtube square" size="big" />
      </NewTabA>
    </Grid.Column>
  </Grid>
);

export default Icons;
