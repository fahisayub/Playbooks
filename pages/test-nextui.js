import { Button } from '@nextui-org/react';

const TestNextUI = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px'
      }}>Welcome to the To-Do App</h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '30px'
      }}>This is a basic test page with a NextUI Button component.</p>
      <Button
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
      >
        Click Me
      </Button>
    </div>
  );
};

export default TestNextUI;
