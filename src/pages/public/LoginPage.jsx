import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Accessing passwords from the .env file
    const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS;
    const KITCHEN_PASS = import.meta.env.VITE_KITCHEN_PASS;
    const ORDER_PASS = import.meta.env.VITE_ORDER_PASS;

    if (password === ADMIN_PASS) {
      navigate('/admin');
    } else if (password === KITCHEN_PASS) {
      navigate('/kitchen');
    } else if (password === ORDER_PASS) {
      navigate('/cashier');
    } else {
      setError(t('login.error'));
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#d4af37'
    }}>
      <form onSubmit={handleLogin} style={{
        padding: '2.5rem',
        border: '1px solid #d4af37',
        borderRadius: '12px',
        textAlign: 'center',
        background: '#1a1a1a',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ marginBottom: '2rem', letterSpacing: '2px' }}>{t('footer.staffLogin')}</h2>
        <div style={{ marginBottom: '1.5rem' }}>
          <input
            type="password"
            placeholder={t('login.placeholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '1rem',
              width: '100%',
              borderRadius: '6px',
              border: '1px solid #333',
              background: '#000',
              color: 'white',
              outline: 'none'
            }}
          />
        </div>
        <button type="submit" style={{
          padding: '1rem 2.5rem',
          backgroundColor: '#d4af37',
          color: 'black',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%',
          transition: 'all 0.3s ease'
        }}>
          {t('cart.checkout')}
        </button>
        {error && <p style={{ color: '#ff4d4d', marginTop: '1.5rem', fontSize: '0.9rem' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;