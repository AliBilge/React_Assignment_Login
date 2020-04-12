import React from 'react';
import {Heading} from './components/Heading';
import logo from './logo.svg';
import {Button, Icon} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>This is My Awsome START</h2>
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
      </header>
    </div>
  );
}

export default App;
