import React from 'react';

const Button = () => {
  const [contador, setContador] = React.useState(0);

  return (
    <>
      <button
        style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
        onClick={() => setContador(contador + 1)}
      >
        <i className="fa-solid fa-square-plus"></i>
      </button>

      <button
        style={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          marginRight: '30px',
          marginLeft: '30px',
        }}
        onClick={() => setContador(contador + 1)}
      >
        {contador}
      </button>

      <button
        style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
        onClick={() => setContador(contador - 1)}
      >
        <i className="fa-solid fa-square-minus"></i>
      </button>
    </>
  );
};

export default Button;
