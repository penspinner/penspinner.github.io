import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Icon } from 'semantic-ui-react';

import Audio from './Audio';

const StyledGrid = styled(Grid)`
  background-color: var(--dark-green);
  text-align: center;
`;

const growBigger = keyframes`50%{ transform: scale(1.2); }`;
const GrowBiggerIcon = styled(Icon)`
  animation: ${growBigger} 1s infinite;
`;

const teardrop = keyframes`
  0% { transform: translateY(-5px); opacity: 0.1; }
  50% { opacity: 1; }
  100% { transform: translateY(10px); opacity: 0.1; }
`;
const TeardropIcon = styled(Icon)`
  animation: ${teardrop} 2s infinite;
`;

const shake = keyframes`
  0% { transform: rotate(-10deg); }
  50% { transform: rotate(20deg); }
  100% { transform: rotate(-20deg); }
`;
const ShakeIcon = styled(Icon)`
  animation: ${shake} 1s infinite;
`;

const Footer = () => (
  <StyledGrid as="footer" textAlign="center">
    <Grid.Row>
      <Audio controls>
        <source
          src="https://docs.google.com/uc?export=download&id=0B-eyIPPQbnF-WWcwUlIzT0JBWE0"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </Audio>
    </Grid.Row>
    <Grid.Row>
      <span>&copy; Copyright Steven Liao. 2016-present. All rights reserved. Made with </span>
      &nbsp;
      <GrowBiggerIcon color="pink" fitted name="heart" />
      &nbsp;
      <TeardropIcon color="blue" fitted name="tint" />
      &nbsp;
      <ShakeIcon color="teal" fitted name="food" />
      &nbsp; .
    </Grid.Row>
  </StyledGrid>
);

export default Footer;
