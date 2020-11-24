import React from 'react';
import ChartExample from './components/chartExample'
import { Router } from './components/common/Router';
import StoreProvider from './context'

function App() {
  return (
    <StoreProvider>
      <Router/>
    {/* <div className="border">
      <ChartExample />
    </div> */}
    </StoreProvider>
  );
}

export default App;
