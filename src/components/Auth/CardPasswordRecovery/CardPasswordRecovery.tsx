import { useState } from 'react';
//Components
import { CardAuth } from '../CardAuth/CardAuth';
import { CardTitle } from '../CardTitle/CardTitle';
import { CardSubtitle } from '../CardSubtitle/CardSubtitle';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardFooter } from '../CardFooter/CardFooter';
import { AuthStatus } from '../AuthStatus/AuthStatus';
import { InputNoLabel } from '../../Inputs/InputNoLabel/InputNoLabel';
import { ButtonText } from '../../Buttons/ButtonText/ButtonText';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary';
//Router
import { Link } from 'react-router-dom';
//Redux
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { checkEmailValidity, reset } from '../../../redux/features/auth/authSlice';
//Validator
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

export const CardPasswordRecovery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hasAccount, isLoading } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [recoveryLink, setRecoveryLink] = useState(false);
  const { email, password } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Send email with password recovery link');
    dispatch(checkEmailValidity(email));
  };

  const handleDone = (e: React.MouseEvent) => {
    e.preventDefault();
    setRecoveryLink(true);
  };

  const handleResetPassword = (e: React.MouseEvent) => {
    console.log('reset password');
    dispatch(reset());
  };

  if (isLoading) return null;

  if (hasAccount && recoveryLink) {
    return (
      <CardAuth>
        <CardHeader>
          <CardTitle title="Forgot your password" />
          <CardSubtitle subtitle="Please enter your new password" />
        </CardHeader>

        <CardBody>
          <form autoComplete="off">
            <InputNoLabel
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={handleChange}
            />
            <Link to="/auth/login">
              <ButtonPrimary
                text={'recover your password'}
                onClick={handleResetPassword}
                isValid={!isEmpty(password)}
              />
            </Link>
          </form>
        </CardBody>
      </CardAuth>
    );
  }

  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Forgot your password" />
        <CardSubtitle subtitle="Enter your details below" />
      </CardHeader>

      <CardBody>
        <form autoComplete="off">
          {isEmail(email) && hasAccount === true ? (
            <AuthStatus
              error={false}
              message={`Well done, we'll email you with a reset link.`}
            />
          ) : isEmail(email) && hasAccount === false ? (
            <AuthStatus
              error={true}
              message={`Your email is not an account in Roundrush`}
            />
          ) : (
            <></>
          )}
          <InputNoLabel
            name="email"
            type="email"
            placeholder="your email"
            value={email}
            autoComplete="off"
            onChange={handleChange}
          />
          {hasAccount ? (
            <ButtonPrimary text={'done'} onClick={handleDone} isValid={true} />
          ) : (
            <ButtonPrimary
              text={'recover your password'}
              onClick={handleClick}
              isValid={isEmail(email)}
            />
          )}
        </form>
      </CardBody>

      <CardFooter>
        <Link to="/auth/login">
          <ButtonText text="Back to login" />
        </Link>
      </CardFooter>
    </CardAuth>
  );
};

export default CardPasswordRecovery;
