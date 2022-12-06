import React from 'react';
import styles from './AuthPage.module.css';
import { ReactComponent as RoundrushLogo } from '../../assets/logo/RoundrushLogo.svg';
import AuthMessage from '../../components/Auth/AuthMessage/AuthMessage';
import CardLogin from '../../components/Auth/CardLogin/CardLogin';
import { useLocation } from 'react-router-dom';
import CardSignup from '../../components/Auth/CardSignup/CardSignup';
import CardPasswordRecovery from '../../components/Auth/CardPasswordRecovery/CardPasswordRecovery';

function AuthPage() {
  const route = useLocation();

  return (
    <div className={styles.background}>
      <RoundrushLogo />
      <AuthMessage
        message={
          route.pathname === '/auth/sign-up'
            ? 'signing up a new account'
            : 'the optimized workflow out of the box'
        }
      />
      {route.pathname === '/auth/sign-up' ? (
        <CardSignup />
      ) : route.pathname === '/auth/password-recovery' ? (
        <CardPasswordRecovery />
      ) : (
        <CardLogin />
      )}
    </div>
  );
}

export default AuthPage;
