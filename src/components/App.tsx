import React from 'react';
import Header from './header/Header';
import Main from './Main';

// function component define children as a ReactNode

const App:React.FC = () => (
  <>
    <Header />
    <Main />
  </>
);
export default App;
