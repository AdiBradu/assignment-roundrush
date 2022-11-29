import React, { useState } from 'react';
import CardAuth from '../CardAuth/CardAuth';
import CardTitle from '../CardTitle/CardTitle';
import CardSubtitle from '../CardSubtitle/CardSubtitle';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonNext from '../../Buttons/ButtonNext/ButtonNext';
import ButtonGoToLogin from '../../Buttons/ButtonGoToLogin/ButtonGoToLogin';
import ButtonRegister from '../../Buttons/ButtonRegister/ButtonRegister';
import dummyUser from '../../../data/user';
import { Link } from 'react-router-dom';

function CardSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyNae] = useState('');
  const [needsRegistration, setNeedsRegistration] = useState(false);
  const [needsSpace, setNeedsSpace] = useState(false);
  const [isEmailValid, seiIsEmailValid] = useState(false);
  const [subTitle, setSubtitle] = useState("Let's validate your email first");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeCompanyName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCompanyNae(event.target.value);
  };

  const handleValidateEmail = () => {
    if (email === dummyUser.email) {
      setSubtitle("Your email it's already account in Roundrush");
      seiIsEmailValid(true);
    } else {
      seiIsEmailValid(false);
      setNeedsRegistration(true);
      setSubtitle('Fill up your account information');
    }
  };

  const handleCreateSpace = () => {
    setSubtitle('Create your company space');
    setNeedsSpace(true);
  };

  const handleRegister = () => {
    console.log('register');
  };

  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Sign Up" />
        <CardSubtitle subtitle={subTitle} />
      </CardHeader>

      {isEmailValid ? (
        <CardBody>
          <Link to="/auth/login">
            <ButtonGoToLogin />
          </Link>
        </CardBody>
      ) : needsRegistration && !needsSpace ? (
        <CardBody>
          <InputNoLabel
            name="name"
            type="text"
            placeholder="Insert your full name"
            value={name}
            autoComplete="off"
            onChange={handleChangeName}
            required={true}
          />
          <InputNoLabel
            name="password"
            type="password"
            placeholder="Choose your password"
            value={password}
            autoComplete="off"
            onChange={handleChangePassword}
            required={true}
          />
          <ButtonNext onClick={handleCreateSpace} />
        </CardBody>
      ) : needsRegistration && needsSpace ? (
        <CardBody>
          <InputNoLabel
            name="companyName"
            type="text"
            placeholder="company name"
            value={companyName}
            autoComplete="off"
            onChange={handleChangeCompanyName}
            required={true}
          />
          <ButtonRegister onClick={handleRegister} />
        </CardBody>
      ) : (
        <CardBody>
          <InputNoLabel
            name="email"
            type="email"
            placeholder="your email"
            value={email}
            autoComplete="off"
            onChange={handleChangeEmail}
            required={true}
          />
          <ButtonNext onClick={handleValidateEmail} />
        </CardBody>
      )}
    </CardAuth>
  );
}

export default CardSignup;
