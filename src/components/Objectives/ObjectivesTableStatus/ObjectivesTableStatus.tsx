import React from 'react';
//Material UI
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

interface ObjectivesTableStatusProps {
  priority: string | null | undefined;
}

const StyledBox = styled(Box)(() => ({
  height: '32px',
  width: '130px',
  background: '#D6D7DC',
  borderRadius: '6px',
  color: '#fff',
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '14px',
  textAlign: 'center',
  textTransform: 'capitalize',
}));

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

export const ObjectivesTableStatus: React.FC<ObjectivesTableStatusProps> = ({
  priority,
}) => {
  return (
    <React.Fragment>
      {priority ? (
        <StyledBox>
          <StyledStack>not done</StyledStack>
        </StyledBox>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};
