import React from 'react';
//Material UI
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

interface ObjectivesTablePriorityProps {
  priority: string | null | undefined;
  color: string | undefined;
}

type ColorProp = {
  color: string | undefined;
};

const StyledBox = styled(Box)<ColorProp>(({ color }) => ({
  height: '32px',
  width: '130px',
  background: color,
  borderRadius: '6px',
  color: '#fff',
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '14px',
  textAlign: 'center',
}));

const StyledStack = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

export const ObjectivesTablePriority = ({
  priority,
  color,
}: ObjectivesTablePriorityProps) => {
  return (
    <React.Fragment>
      {priority ? (
        <StyledBox color={color}>
          <StyledStack flexDirection={'column'}>{priority}</StyledStack>
        </StyledBox>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};
