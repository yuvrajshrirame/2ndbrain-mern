const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BootSequence from './components/BootSequence';
import Vault from './components/Vault';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import { GoogleOAuthProvider } from '@react-oauth/google';

function AppCore() {
  const [appState, setAppState] = useState('marketing');
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch(API_URL + '/api/auth/me', {
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
    <>
      {appState === 'marketing' && <LandingPage onEnter={() => setAppState('booting')} />}
      {appState === 'booting' && <BootSequence onComplete={() => setAppState('vault')} />}
      {appState === 'vault' && <Vault user={user} setUser={setUser} />}
    </>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "TODO_CLIENT_ID"}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<AppCore />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
