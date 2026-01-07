// src/Colo.tsx
import React from 'react';

const Colo: React.FC = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>salut</div>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>Cell 2</div>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>Cell 3</div>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>Cell 4</div>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>Cell 5</div>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>Cell 6</div>
      <div style={{ backgroundColor: '#ddd', padding: '1rem', textAlign: 'center' }}>Cell 7</div>
    </div>
  );
};

export default Colo;