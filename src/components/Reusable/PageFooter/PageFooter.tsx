//Material UI
import { Box, Stack } from '@mui/material';
//Components
import { ButtonSave } from '../../Buttons/ButtonSave/ButtonSave';

export const PageFooter: React.FC = () => {
  return (
    <Box sx={{ padding: '30px 50px', marginTop: 'auto' }}>
      <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
        <ButtonSave />
      </Stack>
    </Box>
  );
};
