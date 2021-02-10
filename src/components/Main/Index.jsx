import React from 'react';
import Info from './Info';
import Welcome from './Welcome';

const Main = (props) => {
  return (
    <main id='wrapper'>
      <Welcome aws={props.aws} />
      <Info aws={props.aws} />
    </main>
  );
};

export default Main;
