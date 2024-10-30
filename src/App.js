import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import './App.css';
import Movie from './pages/Movie'; // Home page
import Profile from './pages/Profile'; // Profile page
import MovieDetail from './pages/MovieDetail'; // Movie Detail page
import Login from './pages/Login'; // Login page

function App() {
  // Cek status login di localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hapus status autentikasi saat aplikasi dimulai
  useEffect(() => {
    localStorage.removeItem('isAuthenticated'); // Hapus status login
  }, []);

  // Fungsi untuk login
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Simpan status login
  };

  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 30</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Movie /> : <Navigate to="/login" />}
        /> {/* Home page */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        /> {/* Profile page */}
        <Route
          path="/movie/:id"
          element={isAuthenticated ? <MovieDetail /> : <Navigate to="/login" />}
        /> {/* Movie Detail page */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
        />
      </Routes>

      {isAuthenticated && (
        <footer>
          <NavLink to="/" className="iconWrapper">
            <HiHome className="icon" /> Home
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      )}
    </BrowserRouter>
  );
}

export default App;
