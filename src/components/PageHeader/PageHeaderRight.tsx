import React from 'react';
//Media
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Only } from '../../assets/icons/only.svg';
import { ReactComponent as OnlyYellow } from '../../assets/icons/onlyyellow.svg';
import { ReactComponent as GoogleCalendar } from '../../assets/logo/logos_google-calendar.svg';
import { ReactComponent as Slack } from '../../assets/logo/logos_slack-icon.svg';
//Router
import { useLocation } from 'react-router-dom';
//Material UI
import { Stack } from '@mui/system';
//Components
import { ButtonUpgrade } from '../Buttons/ButtonUpgrade/ButtonUpgrade';
import { ButtonIteration } from '../Buttons/ButtonIteration/ButtonIteration';
import { ButtonIcon } from '../Buttons/ButtonIcon/ButtonIcon';

export const PageHeaderRight: React.FC = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.includes('/projects') ? true : false;

  return (
    <Stack direction={'row'} sx={{ gap: '24px', alignItems: 'center' }}>
      {isProjectPage ? (
        <React.Fragment>
          <ButtonIteration />
          <ButtonIcon icon={<Slack />} />
          <ButtonIcon icon={<GoogleCalendar />} />
          <ButtonUpgrade />
          <ButtonIcon icon={<OnlyYellow />} />
          <ButtonIcon icon={<Only />} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ButtonIcon icon={<Bell />} />
          <ButtonIcon icon={<Only />} />
        </React.Fragment>
      )}
    </Stack>
  );
};
