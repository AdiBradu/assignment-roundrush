import React from 'react';
import styles from './AuthMessage.module.css';

interface AuthMessageProps {
  message: string;
}

function AuthMessage({ message }: AuthMessageProps) {
  return <p className={styles.authMessage}>{message}</p>;
}

export default AuthMessage;
