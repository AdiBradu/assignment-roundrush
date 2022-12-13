//Components
import { CardAuth } from '../CardAuth/CardAuth';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardTitle } from '../CardTitle/CardTitle';
import { CardSubtitle } from '../CardSubtitle/CardSubtitle';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary';
//Material UI
import { TextField } from '@mui/material';

interface UserRegistrationProps {
  name: string;
  password: string;
  handleChangeUser: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  handleNameAndPassword: () => void;
  isValid: boolean;
}

export const UserRegistration: React.FC<UserRegistrationProps> = ({
  name,
  password,
  isValid,
  handleChangeUser,
  handleNameAndPassword,
}) => {
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
          <ButtonPrimary
            text={'next'}
            onClick={handleNameAndPassword}
            isValid={isValid}
          />
        </form>
      </CardBody>
    </CardAuth>
  );
};
