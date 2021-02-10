import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main/Index'

import './App.css';
const aws = "https://rhz91hml28.execute-api.us-east-2.amazonaws.com"
console.log(process.env.AWS)

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header aws={aws} />
        <Main aws={aws} />
        <Footer />
      </div>
    )
  }
}

export default App;
