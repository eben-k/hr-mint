import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

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
    </ThemeProvider>
  );
}

export default App;
