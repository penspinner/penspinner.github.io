import React from 'react';
import styled from 'styled-components';
import { Grid, Icon } from 'semantic-ui-react';

import withNewTab from './withNewTab';

const FooterWrapper = styled.footer`
  background-color: var(--dark-green);
  text-align: center;
`;

const Anchor = styled.a`
  color: var(--light-green);
  text-decoration: underline;
`;

const NewTabAnchor = withNewTab(Anchor);

const Footer = () => (
  <FooterWrapper>
    <audio controls preload="none" id="footer_audio">
      <source
        src="https://docs.google.com/uc?export=download&id=0B-eyIPPQbnF-WWcwUlIzT0JBWE0"
        type="audio/mpeg"
      />
      Your browser does not support the audio tag.
    </audio>

    <Grid textAlign="center">
      <Grid.Row>
        <Grid.Column width="2">
          <NewTabAnchor href="https://www.github.com/penspinner">GitHub</NewTabAnchor>
        </Grid.Column>
        <Grid.Column width="2">
          <NewTabAnchor href="https://www.linkedin.com/in/stliao">LinkedIn</NewTabAnchor>
        </Grid.Column>
        <Grid.Column width="2">
          <NewTabAnchor href="https://myanimelist.net/animelist/2ezpz2plzme">
            MyAnimeList
          </NewTabAnchor>
        </Grid.Column>
        <Grid.Column width="2">
          <NewTabAnchor href="http://www.youtube.com/32309">YouTube</NewTabAnchor>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <span>&copy; Copyright Steven Liao. 2016-present. All rights reserved. Made with </span>
        &nbsp;
        <Icon color="pink" fitted name="heart" />
        &nbsp;
        <Icon color="blue" fitted name="tint" />
        &nbsp;
        <Icon color="teal" fitted name="food" />
        &nbsp; .
      </Grid.Row>
    </Grid>
  </FooterWrapper>
);

export default Footer;
