import React from 'react';

const withNewTab = (Component: React.ComponentType | string) => (props: any) => (
  <Component rel="noopener noreferrer" target="_blank" {...props} />
);

export default withNewTab;
