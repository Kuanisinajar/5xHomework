import React from 'react';

// components
import PageHeader from './components/pageHeader';

// data
import headerData from './json/pageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader data={headerData}/>
    </div>
  );
}

export default App;
