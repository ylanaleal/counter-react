import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div
      style={{
        background: '#4B5945',
      }}
    >
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100vh',
          marginTop: '0px',
          marginBottom: '0px',
          fontFamily: 'Martian Mono, monospace',
          fontSize: '1.35rem',
          color: '#F2EFE7',
        }}
      >
        <h1 style={{ marginBottom: '30px' }}>🚀 Counter 🚀</h1>
        <div style={{ display: 'flex' }}>
          <Button />
        </div>
      </span>
    </div>
  );
};

export default App;
