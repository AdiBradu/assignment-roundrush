import React from 'react';
import styles from './CardSubtitle.module.css';

type CardSubTitleProps = {
  subtitle: string;
};

function CardSubtitle({ subtitle }: CardSubTitleProps) {
  return <p className={styles.subtitle}>{subtitle}</p>;
}

export default CardSubtitle;
