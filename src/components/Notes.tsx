import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const Chalk = styled.span`
  background-color: var(--beige-green);
  border-radius: 2px;
  bottom: 0px;
  position: absolute;
`;

const StickyNote = styled.div`
  background-color: var(--dark-green);
  max-width: 200px;
  min-height: 100px;
  padding: 1rem;
`;

const Blackboard = styled.div`
  background: linear-gradient(to right, black, var(--chalk-gray) 50%, black) !important;
  border: 10px solid var(--silver);
  color: var(--beige-green);
  padding: 5%;
  position: relative;
  width: 100%;
`;

const Notes = () => (
  <Blackboard>
    <h1>Things about me</h1>
    <Chalk style={{ left: '75%', height: '5px', width: '25px' }} />
    <Chalk style={{ left: '50%', height: '8px', width: '40px' }} />
    <Chalk style={{ left: '10%', height: '12px', width: '35px', borderRadius: '6px' }} />
    <Chalk style={{ left: '25%', height: '6px', width: '30px' }} />
    <Grid columns="equal">
      <Grid.Column>
        <StickyNote>I love using React.</StickyNote>
      </Grid.Column>
      <Grid.Column>
        <StickyNote>
          <p>
            My interest in software started since I was a little kid playing video games and surfing
            the web. The interest developed during my college years. I have made websites, web apps,
            games, and will continue to make more and explore newer technologies.
          </p>
        </StickyNote>
      </Grid.Column>
      <Grid.Column>
        <StickyNote>I am a Fullstack Developer at Percolate Inc.</StickyNote>
      </Grid.Column>
    </Grid>
  </Blackboard>
);

export default Notes;
