import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
// import logo from './logo.svg';
// import './App.css';

import { Central as Main } from './layouts';
import { DashBoard } from './views';
import theme from './theme';
import './assets/scss/index.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <DashBoard />
      </Main>
      {/* <header className="App-header">
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
      </header> */}
    </ThemeProvider>
  );
}

export default App;
