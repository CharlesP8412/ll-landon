import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main/Index'

import './App.css';
const apiGateway = process.env.REACT_APP_AWS_API

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header api={apiGateway} />
        <Main api={apiGateway} />
        <Footer />
      </div>
    )
  }
}

export default App;
