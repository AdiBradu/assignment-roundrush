//Mterial UI
import { Chip, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
//Media
import { ReactComponent as Cancel } from '../../../assets/icons/cancel.svg';

interface ObjectiveDrawerContentChipProps {
  fullname: string;
  avatar: string;
}

const StyledChip = styled(Chip)(() => ({
  backgroundColor: 'rgba(0, 121, 255, 0.296258)',
  borderRadius: '7.5px',
  maxWidth: 'none',
  padding: '8px 12px',
  color: '#0079FF',
  height: 'auto',
  gap: '12px',
  '& .MuiChip-avatar': {
    margin: 0,
  },
  '& .MuiChip-label': {
    padding: 0,
  },
  '& .MuiChip-deleteIcon': {
    margin: 0,
  },
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: '20px',
  height: '20px',
}));

export const ObjectiveDrawerContentChip: React.FC<ObjectiveDrawerContentChipProps> = ({
  fullname,
  avatar,
}) => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <StyledChip
      avatar={<StyledAvatar src={avatar} />}
      label={fullname}
      onDelete={handleDelete}
      deleteIcon={<Cancel />}
    />
  );
};
