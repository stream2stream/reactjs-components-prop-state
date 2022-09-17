import React from 'react';
import './App.css';
import HelloWorldCc from './HelloWorld_cc';
import HelloWorldFc from './HelloWorld_fc';
import HelloWorldCc2 from './HelloWorld_cc2';
import ContainerCc from './Container';
import ContainerFc from './ContainerFc';
import { HelloWorldAf } from './HelloWorld_af';
import ContainerFcWithChild from './Container_fc_with_child';
import { ContainerAfcWithChild } from './Container_afc_with_child';
import ContainerCc_old from './Container_old';
import ContainerFcWLambdas from './ContainerFcWLambdas';
import ContainerFcWuE from './ContainerFcWuE';
import FCDisplayTimeInSameSpot from './FCDisplayTimeInSameSpot';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorldCc who="Selvyn 1"/>
        <HelloWorldFc who="Selvyn 2"/>
        <HelloWorldCc2 who="Selvyn 3"/>
        <HelloWorldAf who="Selvyn 4"/>
        <ContainerCc/>
        <ContainerCc_old/>
        <ContainerFc/>
        <ContainerFcWLambdas/>
        <FCDisplayTimeInSameSpot/>
        <ContainerFcWuE/>
        <ContainerFcWithChild/>
        <ContainerAfcWithChild/>
      </header>
    </div>
  );
}

export default App;
