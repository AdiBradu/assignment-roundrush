import { useState, useEffect } from 'react';
//Components
import { CardAuth } from '../CardAuth/CardAuth';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardFooter } from '../CardFooter/CardFooter';
import { CardTitle } from '../CardTitle/CardTitle';
import { CardSubtitle } from '../CardSubtitle/CardSubtitle';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary';
import { ButtonRegister } from '../../Buttons/ButtonRegister/ButtonRegister';
import { HasAccount } from './HasAccount';
import { RegistrationCompleted } from './RegistrationCompleted';
import { UserRegistration } from './UserRegistration';
import { SpaceRegistration } from './SpaceRegistration';
//Material UI
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
} from '@mui/material';
//Redux
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import {
  checkEmailValidity,
  register,
  reset,
} from '../../../redux/features/auth/authSlice';
//Router
import { useNavigate } from 'react-router-dom';
//Form Validator
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

export const CardSignup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hasAccount, user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: {
      nameCompany: '',
      nicknameSpace: '',
      industry: 'Industry type',
      employees: 'Select a size...',
    },
  });

  const [status, setStatus] = useState({
    needsInfo: false,
    hasInfo: false,
    hasSpace: false,
  });

  const { name, email, password } = formData;
  const { nameCompany, nicknameSpace, industry, employees } = formData.company;
  const { needsInfo, hasInfo, hasSpace } = status;

  useEffect(() => {
    if (hasAccount === false) {
      setStatus((prevState) => ({
        ...prevState,
        needsInfo: true,
      }));
    }
  }, [hasAccount]);

  const handleChangeUser = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeCompany = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      company: {
        ...prevState.company,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleCheckEmailValidaity = () => {
    dispatch(checkEmailValidity(email));
  };

  const handleNameAndPassword = () => {
    setStatus((prevState) => ({
      ...prevState,
      hasInfo: true,
    }));
  };

  const handleGoToLogin = () => {
    navigate('/auth/login');
    dispatch(reset());
  };

  const handleRegister = () => {
    dispatch(register(formData));
  };

  if (hasAccount && !user) {
    return <HasAccount handleGoToLogin={handleGoToLogin} />;
  }

  if (user && hasAccount) {
    return <RegistrationCompleted />;
  }

  if (needsInfo && !hasInfo) {
    return (
      <UserRegistration
        name={name}
        password={password}
        isValid={!isEmpty(name) && !isEmpty(password)}
        handleChangeUser={handleChangeUser}
        handleNameAndPassword={handleNameAndPassword}
      />
    );
  }

  if (hasInfo && !hasSpace) {
    return (
      <SpaceRegistration
        nameCompany={nameCompany}
        nicknameSpace={nicknameSpace}
        industry={industry}
        employees={employees}
        isValid={!isEmpty(nameCompany) && !isEmpty(nicknameSpace)}
        handleChangeCompany={handleChangeCompany}
        handleRegister={handleRegister}
      />
    );
  }

  return (
    <CardAuth>
      <CardHeader>
        <CardTitle title="Sign Up" />
        <CardSubtitle subtitle={`Let's validate your email first`} />
      </CardHeader>
      <CardBody>
        <form autoComplete="off">
          <TextField
            fullWidth
            id="email"
            name="email"
            type="email"
            placeholder="Insert your email"
            value={email}
            onChange={handleChangeUser}
          />
          <ButtonPrimary
            text={'next'}
            onClick={handleCheckEmailValidaity}
            isValid={isEmail(email)}
          />
        </form>
      </CardBody>
    </CardAuth>
  );
};
