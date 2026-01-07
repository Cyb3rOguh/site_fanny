// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Heros';
import Colo from './Colo';
import Photo from './Photo';
import ColoDetail from './ColoDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* Only render Hero, Colo, Photo on the root route */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Colo />
                <Photo />
              </>
            }
          />
          <Route path="/colo/:id" element={<ColoDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;