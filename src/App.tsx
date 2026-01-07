// src/App.tsx
import React from 'react';
import Hero from './Heros';
import Colo from './Colo';
import Photo from './Photo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <Colo />
      <Photo />
    </div>
  );
};

export default App;