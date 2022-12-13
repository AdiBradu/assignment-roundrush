//Components
import { CardAuth } from '../CardAuth/CardAuth';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardTitle } from '../CardTitle/CardTitle';
import { ButtonText } from '../../Buttons/ButtonText/ButtonText';
import { CardFooter } from '../CardFooter/CardFooter';
//Material UI
import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
//Router
import { Link } from 'react-router-dom';
//Media
import { ReactComponent as Mail } from '../../../assets/icons/Mail.svg';
import React from 'react';

const StyledStack = styled(Stack)(() => ({
  padding: '66px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '36px',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '26px',
  textAlign: 'center',
  color: '#5a6171',
}));

export const RegistrationCompleted: React.FC = () => {
  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Your account is ready!" />
      </CardHeader>
      <CardBody>
        <StyledStack flexDirection={'column'}>
          <Mail />
          <StyledTypography>
            Please verify your email and continue to Roundrush!
          </StyledTypography>
        </StyledStack>
      </CardBody>
      <CardFooter>
        <Link to="/auth/login">
          <ButtonText text="Go to login page" />
        </Link>
      </CardFooter>
    </CardAuth>
  );
};
