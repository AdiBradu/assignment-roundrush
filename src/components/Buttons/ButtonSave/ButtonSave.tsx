import { Button } from '@mui/material';

interface BUTTON_SAVE {
  onClick?: (event: React.MouseEvent) => void;
}

export const ButtonSave: React.FC<BUTTON_SAVE> = ({ onClick }) => {
  return (
    <Button variant="save" disableElevation onClick={onClick}>
      Save
    </Button>
  );
};
