import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(''); // Reset error message before checking

    try {
      // Ambil data pengguna dari API
      const response = await axios.get('https://reqres.in/api/users?page=2');
      const users = response.data.data; // Ambil data pengguna

      // Cek apakah kombinasi First Name dan Last Name valid
      const isValidUser = users.some(
        (user) => user.first_name === firstName && user.last_name === lastName
      );

      if (isValidUser) {
        // Jika valid, panggil fungsi onLogin untuk mengubah state isAuthenticated di App.js
        onLogin();
      } else {
        // Jika kombinasi tidak valid, set error message
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name (Ex: George)'
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" // Mengubah tipe menjadi 'password'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name (Ex: Edwards)'
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
