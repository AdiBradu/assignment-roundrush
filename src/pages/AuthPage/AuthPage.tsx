import React from 'react';
import styles from './AuthPage.module.css';
import { ReactComponent as RoundrushLogo } from '../../assets/logo/RoundrushLogo.svg';
import AuthMessage from '../../components/Auth/AuthMessage/AuthMessage';
import CardLogin from '../../components/Auth/CardLogin/CardLogin';

function AuthPage() {
  return (
    <div className={styles.background}>
      <RoundrushLogo />
      <AuthMessage />
      <CardLogin />
    </div>
  );
}

export default AuthPage;
