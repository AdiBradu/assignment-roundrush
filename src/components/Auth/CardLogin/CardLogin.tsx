import React, { useState } from 'react';
import styles from './CardLogin.module.css';
import CardAuth from '../CardAuth/CardAuth';
import CardTitle from '../CardTitle/CardTitle';
import ButtonLogin from '../../Buttons/ButtonLogin/ButtonLogin';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonForgotPassword from '../../Buttons/ButtonForgotPassword/ButtonForgotPassword';
import ButtonNoAccount from '../../Buttons/ButtonNoAccount/ButtonNoAccount';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../../../redux/actions/actions';
import { useNavigate, Link } from 'react-router-dom';
import dummyUser from '../../../data/user';

const CardLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    if (
      dummyUser.email === credentials.email &&
      dummyUser.password === credentials.password
    ) {
      dispatch(
        ActionCreators.setUser({
          credentials,
        }),
      );

      dispatch(ActionCreators.setAuthenicated(true));
      navigate('/workspace/info');
    }
  };

  return (
    <CardAuth>
      <CardTitle title="Login" />
      <div className={styles.loginGroup}>
        <InputNoLabel
          name="email"
          type="email"
          placeholder="your email"
          value={credentials.email}
          autoComplete="off"
          onChange={handleChange}
        />
        <InputNoLabel
          name="password"
          type="password"
          placeholder="password"
          value={credentials.password}
          autoComplete="off"
          onChange={handleChange}
        />
        <ButtonLogin onClick={handleLogin} />
      </div>
      <div className={styles.textButtons}>
        <Link to="/auth/password-recovery">
          <ButtonForgotPassword />
        </Link>
        <Link to="/auth/sign-up">
          <ButtonNoAccount />
        </Link>
      </div>
    </CardAuth>
  );
};

export default CardLogin;
