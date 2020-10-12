import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorldCc from './HelloWorld_cc';
import HelloWorldFc from './HelloWorld_fc';
import HelloWorldCc2 from './HelloWorld_cc2';
import ContainerCc from './Container';
import ContainerFc from './Container_fc';
import { HelloWorldAf } from './HelloWorld_af';
import ContainerFcWithChild from './Container_fc_with_child';
import { ContainerAfcWithChild } from './Container_afc_with_child';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorldCc who="Selvyn"/>
        <HelloWorldFc who="Selvyn"/>
        <HelloWorldCc2 who="Selvyn2"/>
        <ContainerCc/>
        <ContainerFc/>
        <HelloWorldAf who="Selvyn"/>
        <ContainerFcWithChild/>
        <ContainerAfcWithChild/>
      </header>
    </div>
  );
}

export default App;
