import React from 'react';

import { OutlinedInput } from '@mui/material';

type InputNoLabelProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputNoLabel = ({
  name,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
}: InputNoLabelProps) => {
  return (
    <>
      {/* <Input fullWidth type="text" placeholder="your email" /> */}
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

export default InputNoLabel;
