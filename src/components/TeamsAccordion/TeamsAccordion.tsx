//Material UI
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Box,
  Stack,
} from '@mui/material';
//Media
import { ReactComponent as Member } from '../../assets/icons/member.svg';
import { ReactComponent as ArrowDown } from '../../assets//icons/arrow-down.svg';
//Hardcoded data
import { teams, colors } from '../../data/teams';

interface TeamsAccordionProps {
  isDrawerOpen: boolean;
}

export const TeamsAccordion = ({ isDrawerOpen }: TeamsAccordionProps) => {
  return (
    <Accordion sx={{ width: isDrawerOpen ? '100%' : 'auto' }}>
      <ListItemButton
        sx={{
          justifyContent: isDrawerOpen ? 'initial' : 'center',
          padding: '14px 24px',
          gap: isDrawerOpen ? '12px' : '0px',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
        }}
      >
        <AccordionSummary
          expandIcon={isDrawerOpen ? <ArrowDown /> : <></>}
          aria-controls="teams"
          sx={{ gap: isDrawerOpen ? '12px' : '0px', width: '100%' }}
        >
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Member />
          </ListItemIcon>
          <ListItemText
            primary={'Teams'}
            sx={{ display: isDrawerOpen ? 'flex' : 'none' }}
          />
        </AccordionSummary>
      </ListItemButton>
      <AccordionDetails sx={{ display: isDrawerOpen ? 'flex' : 'none' }}>
        <List>
          {teams.map((team, index) => (
            <ListItem sx={{ padding: '8px 0px' }} key={team.name}>
              <Stack>
                <ListItemText primary={team.name} />
                <List>
                  {team.subteams.map((subteam, index) => (
                    <ListItem
                      sx={{ padding: '0px', cursor: 'pointer' }}
                      key={subteam + index}
                    >
                      <Stack
                        flexDirection={'row'}
                        gap="8px"
                        alignItems={'center'}
                      >
                        <Box
                          sx={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: colors[index],
                            borderRadius: '3px',
                          }}
                        ></Box>
                        <ListItemText primary={subteam} />
                      </Stack>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
