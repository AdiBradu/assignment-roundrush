//Material UI
import { Avatar, Stack, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
//Hardcoded data
import { assignees } from '../../../data/assignees';

const StyledAvatar = styled(Avatar)(() => ({
  width: '20px',
  height: '20px',
  border: '1px solid #fff',
  marginLeft: '-8px',
  position: 'relative',
  '&:first-child': {
    marginLeft: '0px',
  },
}));

const StyledTooltip = styled(Tooltip)(() => ({
  backgroundColor: '#474747',
}));

const StyledStack = styled(Stack)(() => ({
  display: 'inline-flex',
}));

export const ObjectivesTableAssignees: React.FC = () => {
  return (
    <StyledStack flexDirection={'row'}>
      {assignees.map((assignee) => (
        <StyledTooltip
          key={assignee.firstName}
          title={assignee.firstName}
          placement="top"
          arrow
        >
          <StyledAvatar src={assignee.avatar} />
        </StyledTooltip>
      ))}
    </StyledStack>
  );
};
