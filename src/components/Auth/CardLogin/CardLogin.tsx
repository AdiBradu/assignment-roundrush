import React from 'react';
import styles from './CardLogin.module.css';
import CardAuth from '../CardAuth/CardAuth';
import CardTitle from '../CardTitle/CardTitle';
import ButtonLogin from '../../Buttons/ButtonLogin/ButtonLogin';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonForgotPassword from '../../Buttons/ButtonForgotPassword/ButtonForgotPassword';
import ButtonNoAccount from '../../Buttons/ButtonNoAccount/ButtonNoAccount';

function CardLogin() {
  return (
    <CardAuth>
      <CardTitle title="Login" />
      <div className={styles.loginGroup}>
        <InputNoLabel type={'email'} placeholder={'your email'} />
        <InputNoLabel type={'password'} placeholder={'password'} />
        <ButtonLogin />
      </div>
      <div className={styles.textButtons}>
        <ButtonForgotPassword />
        <ButtonNoAccount />
      </div>
    </CardAuth>
  );
}

export default CardLogin;
