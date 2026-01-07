// src/App.tsx
import React from 'react';
import Hero from './Heros';
import Colo from './Colo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <Colo />
    </div>
  );
};

export default App;