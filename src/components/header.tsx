import React from 'react';
import { Link } from 'gatsby';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import Logo from './logo';

const HeaderWrapper = styled.header`
  background-color: var(--dark-green);
  padding: 1rem;
`;

const LinkItem = styled(Link)`
  border: 2px solid transparent;
  border-radius: 14%;
  color: var(--beige-green);
  font-size: var(--large-font-size);
  padding: 5px;
  text-decoration: none;

  &:hover {
    border-color: var(--light-green);
    color: var(--beige-green);
    text-decoration: none;
    transition: border-color 1s ease-out, color 1.5s ease-out;
    -webkit-transition: border-color 1s ease-out, color 1.5s ease-out;
  }

  &.active {
    border-color: $lightGreen;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Grid>
      <Grid.Row verticalAlign="middle">
        <Grid.Column width="10">
          <Link to="/">
            <Logo width="75px" />
          </Link>
        </Grid.Column>

        <Grid.Column width="2">
          <LinkItem to="/">Resume</LinkItem>
        </Grid.Column>
        <Grid.Column width="2">
          <LinkItem to="/">Projects</LinkItem>
        </Grid.Column>
        <Grid.Column width="2">
          <LinkItem to="/">Contact</LinkItem>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </HeaderWrapper>
);

export default Header;
