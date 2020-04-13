import React from 'react';
import {Heading} from './components/Heading';
import Person from './components/Person';
import logo from './logo.svg';
import {Button, Icon} from 'semantic-ui-react';
import './App.css';


const myPersonFuction = (input: string): string => {
  return 'Our person is important' + input;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <h3>This is My Awsome START</h3>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button size="small" color="green"><Icon name="download" />
        Download
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person />
        <Person name="Billy Joe Bob" callbackMethod={myPersonFuction} />
      </header>
    </div>
  );
}

export default App;
