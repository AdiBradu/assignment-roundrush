import React, { useState } from 'react';
import CardAuth from '../CardAuth/CardAuth';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import CardTitle from '../CardTitle/CardTitle';
import ButtonLogin from '../../Buttons/ButtonLogin/ButtonLogin';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonText from '../../Buttons/ButtonText/ButtonText';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { Link } from 'react-router-dom';
import { login, reset } from '../../../redux/features/auth/authSlice';
import { fetchUsers } from '../../../redux/features/users/usersSlice';

const CardLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = () => {
    dispatch(login(credentials));
    dispatch(fetchUsers());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Login" />
      </CardHeader>

      <CardBody>
        <form autoComplete="off">
          <InputNoLabel
            name="email"
            type="email"
            placeholder="your email"
            value={email}
            autoComplete="off"
            onChange={handleChange}
          />
          <InputNoLabel
            name="password"
            type="password"
            placeholder="password"
            value={password}
            autoComplete="off"
            onChange={handleChange}
          />
          <Link to="/workspace/info">
            <ButtonLogin onClick={handleLogin} />
          </Link>
        </form>
      </CardBody>

      <CardFooter>
        <Link to="/auth/password-recovery">
          <ButtonText text="I forgot my password" onClick={handleReset} />
        </Link>
        <Link to="/auth/sign-up">
          <ButtonText text="I don't have an account" onClick={handleReset} />
        </Link>
      </CardFooter>
    </CardAuth>
  );
};

export default CardLogin;
