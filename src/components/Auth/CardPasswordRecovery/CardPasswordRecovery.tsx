import React from 'react';
import CardAuth from '../CardAuth/CardAuth';
import CardTitle from '../CardTitle/CardTitle';
import CardSubtitle from '../CardSubtitle/CardSubtitle';

function CardPasswordRecovery() {
  return (
    <CardAuth>
      <CardTitle title="Forgot your password" />
      <CardSubtitle subtitle="Enter your details below" />
    </CardAuth>
  );
}

export default CardPasswordRecovery;
