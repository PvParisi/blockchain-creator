import React, { Component } from 'react';
import './App.css';

import Block from './Components/Block';
import NewBlock from './Components/NewBlock';
import Header from './Components/Header';

import Blockchain from './blockchain/Blockchain';

class App extends Component {

  blockchain = new Blockchain(2);

  render() {

    return (
      <div className='App'>
        <Header />
        <Block
          index = {this.blockchain.blockchain[0].index}
          previousHash = {this.blockchain.blockchain[0].previousHash}
          timestamp = {this.blockchain.blockchain[0].timestamp}
          data = {this.blockchain.blockchain[0].data}
          hash = {this.blockchain.blockchain[0].hash}
          nonce = {this.blockchain.blockchain[0].nonce}
        />
        <NewBlock />
      </div>
    );
  }
}

export default App;
