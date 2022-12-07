import styles from './CardBody.module.css';
interface CardBodyProps {
  children?: JSX.Element | JSX.Element[];
}

export default function CardBody({ children }: CardBodyProps) {
  return <div className={styles.cardBody}>{children}</div>;
}
