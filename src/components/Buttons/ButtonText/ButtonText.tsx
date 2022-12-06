import React from 'react';
import styles from './ButtonText.module.css';

interface ButtonTextProps {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ButtonText({ text, onClick }: ButtonTextProps) {
  return (
    <p className={styles.buttonText} onClick={onClick}>
      {text}
    </p>
  );
}
