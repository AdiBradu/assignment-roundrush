import { Button } from '@mui/material';

interface BUTTON_DONE {
  onClick?: (event: React.MouseEvent) => void;
}

export const ButtonSave = ({ onClick }: BUTTON_DONE) => {
  return (
    <Button variant="save" disableElevation onClick={onClick}>
      Save
    </Button>
  );
};
