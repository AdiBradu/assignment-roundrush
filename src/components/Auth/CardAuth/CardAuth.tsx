import styles from './CardAuth.module.css';

type CardAuthProps = {
  children?: JSX.Element | JSX.Element[];
};

function CardAuth({ children }: CardAuthProps) {
  return <div className={styles.cardAuth}>{children}</div>;
}

export default CardAuth;
