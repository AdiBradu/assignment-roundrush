import React from 'react';

import { OutlinedInput } from '@mui/material';

interface InputNoLabelProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const InputNoLabel = ({
  name,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
  required,
}: InputNoLabelProps) => {
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
        required={required}
      />
    </>
  );
};

export default InputNoLabel;
