import React from 'react';
import Info from './Info';
import Welcome from './Welcome';

const Main = (props) => {
  return (
    <main id='wrapper'>
      <Welcome aws={props.api} />
      <Info aws={props.api} />
    </main>
  );
};

export default Main;
