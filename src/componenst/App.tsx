import * as React from 'react';
import Header from './header/Header';
import Main from './main/Main';

const App: React.FC = () => (
  <>
    <Header />
    <Main />
  </>
);
/**
 * обеспечивают проверку типов и автозаполнение
 * для статических свойств :displayName, propTypes,defoltProps
 */
export default App;
