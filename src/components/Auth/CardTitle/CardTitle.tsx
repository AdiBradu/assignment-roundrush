import styles from './CardTitle.module.css';

type CardTitleProps = {
  title: string;
};

function CardTitle({ title }: CardTitleProps) {
  return <p className={styles.cardTitle}>{title}</p>;
}

export default CardTitle;
