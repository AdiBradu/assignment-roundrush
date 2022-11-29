import React, { useState } from 'react';
import CardAuth from '../CardAuth/CardAuth';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import CardTitle from '../CardTitle/CardTitle';
import ButtonLogin from '../../Buttons/ButtonLogin/ButtonLogin';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonText from '../../Buttons/ButtonText/ButtonText';
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
    } else {
    }
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
          value={credentials.email}
          autoComplete="off"
          onChange={handleChange}
          required={true}
        />
        <InputNoLabel
          name="password"
          type="password"
          placeholder="password"
          value={credentials.password}
          autoComplete="off"
          onChange={handleChange}
          required={true}
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
