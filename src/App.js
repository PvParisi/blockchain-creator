import React, { Component } from 'react';
import './App.css';

import Block from './Components/Block';
import NewBlock from './Components/NewBlock';

//import Blockchain from './blockchain/Blockchain';

class App extends Component {
  render() {
    return (
      <div>
        <Block index='0'/>
        <NewBlock />
      </div>
    );
  }
}

export default App;
