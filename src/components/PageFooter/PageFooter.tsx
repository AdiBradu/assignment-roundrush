import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import { ButtonSave } from '../Buttons/ButtonSave/ButtonSave';

export const PageFooter = () => {
  return (
    <Box sx={{ padding: '30px 50px', marginTop: 'auto' }}>
      <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
        <ButtonSave />
      </Stack>
    </Box>
  );
};
