import React from 'react';
import styles from './ButtonText.module.css';

interface ButtonTextProps {
  text: string;
}

export default function ButtonText({ text }: ButtonTextProps) {
  return <p className={styles.buttonText}>{text}</p>;
}
