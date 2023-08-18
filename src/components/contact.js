import React, { useState, useEffect } from 'react';

function LoginForm() {
  // Membuat state untuk menyimpan input email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Membuat state untuk menyimpan informasi login
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Fungsi untuk menyimpan informasi login ke local storage
  const saveLoginInfoToLocalStorage = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }

  // Fungsi untuk mengambil informasi login dari local storage
  const getLoginInfoFromLocalStorage = () => {
    const storedValue = localStorage.getItem('isLoggedIn');
    if (storedValue !== null) {
      setIsLoggedIn(JSON.parse(storedValue));
    }
  }

  // Menyimpan informasi login ke local storage saat nilai isLoggedIn berubah
  useEffect(() => {
    saveLoginInfoToLocalStorage();
  }, [isLoggedIn]);

  // Mengambil informasi login dari local storage saat komponen di-mount
  useEffect(() => {
    getLoginInfoFromLocalStorage();
  }, []);

  // Fungsi untuk menangani event submit pada form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Cek email dan password
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
      alert('Login berhasil!');
    } else {
      alert('Email atau password salah!');
    }
    // Reset input email dan password
    setEmail('');
    setPassword('');
  }

  // Fungsi untuk menangani event perubahan input email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  // Fungsi untuk menangani event perubahan input password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Selamat datang!</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
