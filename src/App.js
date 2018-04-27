import React, { Component } from 'react';
import './App.css';

import Block from './Components/Block';
import NewBlock from './Components/NewBlock';
import Header from './Components/Header';

//import Blockchain from './blockchain/Blockchain';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <NewBlock />
        <Block index='0'/>
      </div>
    );
  }
}

export default App;
