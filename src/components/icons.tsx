import React from 'react';
import { Icon } from 'semantic-ui-react';

import withNewTab from './withNewTab';

const NewTabA = withNewTab('a');

const Icons = () => (
  <ul className="icons">
    <li>
      <NewTabA href="https://github.com/penspinner" title="GitHub">
        <Icon name="github square" />
      </NewTabA>
    </li>
    <li>
      <NewTabA href="https://linkedin.com/in/stliao" title="LinkedIn">
        <Icon name="linkedin square" />
      </NewTabA>
    </li>
    <li>
      <NewTabA href="https://youtube.com/32309" title="YouTube">
        <Icon name="youtube square" />
      </NewTabA>
    </li>
  </ul>
);

export default Icons;
