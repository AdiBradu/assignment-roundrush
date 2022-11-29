import React from 'react';
import styles from './CardHeader.module.css';

interface CardHeaderProps {
  children?: JSX.Element | JSX.Element[];
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export default CardHeader;
