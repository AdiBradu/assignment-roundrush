import React from 'react';
import styles from './CardFooter.module.css';

interface CardFooterProps {
  children?: JSX.Element | JSX.Element[];
}

export default function CardFooter({ children }: CardFooterProps) {
  return <div className={styles.cardFooter}>{children}</div>;
}
