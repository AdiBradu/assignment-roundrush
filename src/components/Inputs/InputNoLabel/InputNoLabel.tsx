import React from 'react';

import { OutlinedInput } from '@mui/material';

type InputNoLabelProps = {
  type: string;
  placeholder: string;
};

function InputNoLabel({ type, placeholder }: InputNoLabelProps) {
  return (
    <>
      {/* <Input fullWidth type="text" placeholder="your email" /> */}
      <OutlinedInput
        fullWidth
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
    </>
  );
}

export default InputNoLabel;
