import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';

const Start = () => {};
const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
