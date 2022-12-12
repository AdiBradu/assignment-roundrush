import React from 'react';
//Material UI
import { OutlinedInput } from '@mui/material';

type InputNoLabelProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputNoLabel: React.FC<InputNoLabelProps> = ({
  name,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
}) => {
  return (
    <>
      <OutlinedInput
        fullWidth
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </>
  );
};
