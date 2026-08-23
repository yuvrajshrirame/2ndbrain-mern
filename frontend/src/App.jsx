import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import BootSequence from './components/BootSequence';
import Vault from './components/Vault';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [appState, setAppState] = useState('marketing');
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch('http://localhost:5000/api/auth/me', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            const userData = await res.json();
            setUser(userData);
            setAppState('booting');
          } else {
            localStorage.removeItem('token');
            setAppState('marketing');
          }
        } catch (err) {
          console.error('Auth check failed', err);
          setAppState('marketing');
        }
      } else {
        setAppState('marketing');
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, []);

  if (isCheckingAuth) return <div style={{ height: '100vh', backgroundColor: '#020203' }}></div>;

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "TODO_CLIENT_ID"}>
      {appState === 'marketing' && <LandingPage onEnter={() => setAppState('booting')} />}
      {appState === 'booting' && <BootSequence onComplete={() => setAppState('vault')} />}
      {appState === 'vault' && <Vault user={user} setUser={setUser} />}
    </GoogleOAuthProvider>
  );
}

export default App;