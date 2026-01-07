// src/ColoDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Define the type for our content
type ColoItem = {
  title: string;
  description: string;
};

// Define valid IDs
const VALID_IDS = ['1', '2', '3', '4', '5', '6', '7'] as const;
type ColoId = typeof VALID_IDS[number];

const ColoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data — strongly typed
  const content: Record<ColoId, ColoItem> = {
    '1': { title: 'Salut', description: 'This is the first item.' },
    '2': { title: 'Cell 2', description: 'This is the second item.' },
    '3': { title: 'Cell 3', description: 'This is the third item.' },
    '4': { title: 'Cell 4', description: 'This is the fourth item.' },
    '5': { title: 'Cell 5', description: 'This is the fifth item.' },
    '6': { title: 'Cell 6', description: 'This is the sixth item.' },
    '7': { title: 'Cell 7', description: 'This is the seventh item.' },
  };

  // Safely get item — fallback to first item if invalid ID
  const item = content[id as ColoId] || content['1'];

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Grid
      </button>
    </div>
  );
};

export default ColoDetail;