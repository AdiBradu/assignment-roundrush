import React, { useState, useEffect } from 'react';
import styles from './CardSignup.module.css';
import { ReactComponent as Mail } from '../../../assets/icons/Mail.svg';
import CardAuth from '../CardAuth/CardAuth';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import CardTitle from '../CardTitle/CardTitle';
import CardSubtitle from '../CardSubtitle/CardSubtitle';
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
} from '@mui/material';
import ButtonNext from '../../Buttons/ButtonNext/ButtonNext';
import ButtonGoToLogin from '../../Buttons/ButtonGoToLogin/ButtonGoToLogin';
import ButtonRegister from '../../Buttons/ButtonRegister/ButtonRegister';
import ButtonText from '../../Buttons/ButtonText/ButtonText';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import {
  checkEmailValidity,
  register,
  reset,
} from '../../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { Link } from 'react-router-dom';

function CardSignup() {
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
    return (
      <CardAuth>
        <CardHeader>
          <CardTitle title="Sign Up" />
          <CardSubtitle subtitle={`Your email is an account in Roundrush`} />
        </CardHeader>
        <CardBody>
          <ButtonGoToLogin onClick={handleGoToLogin} />
        </CardBody>
      </CardAuth>
    );
  }

  if (user && hasAccount) {
    return (
      <CardAuth>
        <CardHeader>
          <CardTitle title="Your account is ready!" />
        </CardHeader>
        <CardBody>
          <div className={styles.final}>
            <Mail />
            <p className={styles.verifyText}>
              Please verify your email and continue to Roundrush!
            </p>
          </div>
        </CardBody>
        <CardFooter>
          <Link to="/auth/login">
            <ButtonText text="Go to login page" />
          </Link>
        </CardFooter>
      </CardAuth>
    );
  }

  if (needsInfo && !hasInfo) {
    return (
      <CardAuth>
        <CardHeader>
          <CardTitle title="Sign Up" />
          <CardSubtitle subtitle={`Fill up your account information`} />
        </CardHeader>
        <CardBody>
          <form autoComplete="off">
            <TextField
              id="name"
              name="name"
              type="text"
              placeholder="Insert your full name"
              value={name}
              onChange={handleChangeUser}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Choose your password"
              value={password}
              onChange={handleChangeUser}
            />
            <ButtonNext
              onClick={handleNameAndPassword}
              isValid={!isEmpty(name) && !isEmpty(password)}
            />
          </form>
        </CardBody>
      </CardAuth>
    );
  }

  if (hasInfo && !hasSpace) {
    return (
      <CardAuth>
        <CardHeader>
          <CardTitle title="Sign Up" />
          <CardSubtitle subtitle={`Create your company space`} />
        </CardHeader>
        <CardBody>
          <form autoComplete="off">
            <TextField
              label="Company name"
              id="nameCompany"
              name="nameCompany"
              type="text"
              placeholder="Company name"
              value={nameCompany}
              onChange={handleChangeCompany}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Your space will be"
              id="nicknameSpace"
              name="nicknameSpace"
              type="text"
              placeholder="Your space will be"
              value={nicknameSpace}
              onChange={handleChangeCompany}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              select={true}
              label="Industry"
              name="industry"
              id="industry"
              value={industry}
              onChange={handleChangeCompany}
              SelectProps={{
                renderValue: () => <em>{industry}</em>,
              }}
            >
              <MenuItem value={'IT'}>IT</MenuItem>
              <MenuItem value={'Space'}>Space</MenuItem>
            </TextField>

            <TextField
              select={true}
              label="Number of employees"
              name="employees"
              id="employees"
              value={employees}
              onChange={handleChangeCompany}
              SelectProps={{
                renderValue: () => <em>{employees}</em>,
              }}
            >
              <MenuItem value={'1-5'}>1-5</MenuItem>
              <MenuItem value={'5-20'}>5-20</MenuItem>
            </TextField>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Accetto le Condizioni di utilizzo e informativa sulla Privacy"
              />
            </FormGroup>
            <ButtonRegister
              onClick={handleRegister}
              isValid={!isEmpty(nameCompany) && !isEmpty(nicknameSpace)}
            />
          </form>
        </CardBody>
      </CardAuth>
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
          <ButtonNext
            onClick={handleCheckEmailValidaity}
            isValid={isEmail(email)}
          />
        </form>
      </CardBody>
    </CardAuth>
  );
}

export default CardSignup;
