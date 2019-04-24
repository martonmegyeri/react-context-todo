import React from 'react';

import { StateProvider } from './context';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  return (
    <StateProvider>
      <div className="App">
        <Header />
        <List />
      </div>
    </StateProvider>
  );
}

export default App;
