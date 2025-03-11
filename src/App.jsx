import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100vh',
        }}
      >
        <h1 style={{ marginBottom: '30px' }}>Count 🚀</h1>
        <span style={{ display: 'flex' }}>
          <Button />
        </span>
      </span>
    </>
  );
};

export default App;
