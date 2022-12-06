import { Button } from '@mui/material';

interface BUTTON_DONE {
  onClick?: (event: React.MouseEvent) => void;
  isValid?: boolean;
}

export const ButtonDone = ({ onClick, isValid }: BUTTON_DONE) => {
  return (
    <Button
      fullWidth
      variant="login"
      disableElevation
      onClick={onClick}
      disabled={isValid ? false : true}
    >
      Done
    </Button>
  );
};
