import React, { useState, useEffect } from 'react';
import CardAuth from '../CardAuth/CardAuth';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import CardTitle from '../CardTitle/CardTitle';
import ButtonLogin from '../../Buttons/ButtonLogin/ButtonLogin';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonText from '../../Buttons/ButtonText/ButtonText';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../../redux/slices/authSlice';
import { fetchUsers } from '../../../redux/slices/usersSlice';

const CardLogin = () => {
  const [user, setUser] = useState({
    credentials: { email: '', password: '' },
    isLoggedIn: false,
  });
  const { credentials, isLoggedIn } = user;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const emails = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((user) => ({
      ...user,
      credentials: {
        ...user.credentials,
        [event.target.name]: event.target.value,
      },
      isLoggedIn: false,
    }));
  };

  const handleLogin = () => {
    setUser((user) => ({
      ...user,
      credentials: {
        ...user.credentials,
      },
      isLoggedIn: true,
    }));
    dispatch(login(user));
    navigate('/workspace/info');
  };

  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Login" />
      </CardHeader>

      <CardBody>
        <InputNoLabel
          name="email"
          type="email"
          placeholder="your email"
          value={user.credentials.email}
          autoComplete="off"
          onChange={handleChange}
        />
        <InputNoLabel
          name="password"
          type="password"
          placeholder="password"
          value={user.credentials.password}
          autoComplete="off"
          onChange={handleChange}
        />
        <ButtonLogin onClick={handleLogin} />
      </CardBody>

      <CardFooter>
        <Link to="/auth/password-recovery">
          <ButtonText text="I forgot my password" />
        </Link>
        <Link to="/auth/sign-up">
          <ButtonText text="I don't have an account" />
        </Link>
      </CardFooter>
    </CardAuth>
  );
};

export default CardLogin;
