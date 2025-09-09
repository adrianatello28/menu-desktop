import { useState } from 'react';
import MenuOpenDesktop from './components/MenuOpenDesktop/MenuOpenDesktop';
import LoginScreen from './components/LoginScreen/LoginScreen';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (password) => {
    if (password === 'MELI') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta.');
    }
  };

  // Render the login screen or the main application
  return isAuthenticated ? <MenuOpenDesktop /> : <LoginScreen onLogin={handleLogin} />;
}

export default App;
