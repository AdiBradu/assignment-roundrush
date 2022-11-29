import React, { useState } from 'react';
import CardAuth from '../CardAuth/CardAuth';
import CardTitle from '../CardTitle/CardTitle';
import CardSubtitle from '../CardSubtitle/CardSubtitle';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import InputNoLabel from '../../Inputs/InputNoLabel/InputNoLabel';
import ButtonPasswordRecovery from '../../Buttons/ButtonPasswordRecovery/ButtonPasswordRecovery';
import ButtonText from '../../Buttons/ButtonText/ButtonText';
import { Link } from 'react-router-dom';

function CardPasswordRecovery() {
  const [email, setEmail] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    console.log('Send email with password recovery link');
  };

  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Forgot your password" />
        <CardSubtitle subtitle="Enter your details below" />
      </CardHeader>

      <CardBody>
        <InputNoLabel
          name="email"
          type="email"
          placeholder="your email"
          value={email}
          autoComplete="off"
          onChange={handleChange}
        />
        <ButtonPasswordRecovery onClick={handleClick} />
      </CardBody>

      <CardFooter>
        <Link to="/auth/login">
          <ButtonText text="Back to login" />
        </Link>
      </CardFooter>
    </CardAuth>
  );
}

export default CardPasswordRecovery;
