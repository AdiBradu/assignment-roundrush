import styles from './AuthStatus.module.css';
import { ReactComponent as WarningSign } from '../../../assets/icons/warning.svg';
import { ReactComponent as SuccesSign } from '../../../assets/icons/success.svg';

interface AuthMessageProps {
  error?: boolean | null;
  message?: string;
}

export const AuthStatus = ({ error, message }: AuthMessageProps) => {
  return (
    <div className={styles.authStatus}>
      {error ? <WarningSign /> : <SuccesSign />}
      <p className={error ? styles.warning : styles.success}>{message}</p>
    </div>
  );
};
