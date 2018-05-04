import React, { Component } from 'react';
import './App.css';

import BlockchainComponent from './Components/Blockchain';
import NewBlock from './Components/NewBlock';
import Header from './Components/Header';

import Blockchain from './blockchain/Blockchain';

class App extends Component {

  constructor() {
    super();

    this.state = {
      blockchain: new Blockchain(2)
    }
  }


  onAddBtnClick = () => {
    console.log("addBtnClicked");
  }

  render() {

    console.log(this.state.blockchain.blockchain);

    return (
      <div className='App'>
        <Header />
        <BlockchainComponent blocks={this.state.blockchain.blockchain} />
        <NewBlock addBtnClicked={this.onAddBtnClick} />
      </div>
    );
  }
}

export default App;
