import { useState, useEffect } from 'react';
import MenuOpenDesktop from './components/MenuOpenDesktop/MenuOpenDesktop';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const password = prompt('Por favor, introduce la contraseña para acceder:');
    if (password === 'MELI') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta.');
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <h1>Acceso denegado</h1>
      </div>
    );
  }

  return <MenuOpenDesktop />;
}

export default App;
