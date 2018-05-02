import React, { Component } from 'react';
import './App.css';

import BlockchainComponent from './Components/Blockchain';
import NewBlock from './Components/NewBlock';
import Header from './Components/Header';

import Blockchain from './blockchain/Blockchain';

class App extends Component {

  blockchain = new Blockchain(2);

  render() {

    console.log(this.blockchain.blockchain);

    return (
      <div className='App'>
        <Header />
        <BlockchainComponent blocks={this.blockchain.blockchain} />
        <NewBlock />
      </div>
    );
  }
}

export default App;
