import React from 'react';

function MenuContextuel({ onModifier, onSupprimer }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      zIndex: 1000,
    }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '5px 10px', cursor: 'pointer' }} onClick={onModifier}>
          Modifier
        </li>
        <li style={{ padding: '5px 10px', cursor: 'pointer', color: 'red' }} onClick={onSupprimer}>
          Supprimer
        </li>
      </ul>
    </div>
  );
}

export default MenuContextuel;
