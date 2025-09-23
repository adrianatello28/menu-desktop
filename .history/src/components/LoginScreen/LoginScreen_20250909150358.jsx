import React, { useState } from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Ingresar Contraseña</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          autoFocus
        />
        <button type="submit" className="login-button">
          Acceder
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
