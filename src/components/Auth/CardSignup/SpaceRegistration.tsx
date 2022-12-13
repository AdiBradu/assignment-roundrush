import { useState } from 'react';
//Components
import { CardAuth } from '../CardAuth/CardAuth';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardTitle } from '../CardTitle/CardTitle';
import { CardSubtitle } from '../CardSubtitle/CardSubtitle';
import { ButtonRegister } from '../../Buttons/ButtonRegister/ButtonRegister';
//Material UI
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/system';

interface SpaceRegistrationProps {
  nameCompany: string;
  nicknameSpace: string;
  industry: string;
  employees: string;
  isValid: boolean;
  handleChangeCompany: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  handleRegister: () => void;
}

const StyledCheckbox = styled(Checkbox)(() => ({
  padding: '0px 9px',
}));

export const SpaceRegistration: React.FC<SpaceRegistrationProps> = ({
  nameCompany,
  nicknameSpace,
  industry,
  employees,
  isValid,
  handleChangeCompany,
  handleRegister,
}) => {
  const [checked, setChecked] = useState(true);

  const handleCheckbox = () => {
    setChecked(!checked);
  };

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
              control={
                <StyledCheckbox
                  defaultChecked
                  checked={checked}
                  onChange={handleCheckbox}
                />
              }
              label="Accetto le Condizioni di utilizzo e informativa sulla Privacy"
            />
          </FormGroup>
          <ButtonRegister onClick={handleRegister} isValid={isValid && checked} />
        </form>
      </CardBody>
    </CardAuth>
  );
};
