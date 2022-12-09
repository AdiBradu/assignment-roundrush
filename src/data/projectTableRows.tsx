//Material UI
import { Stack, Typography, Box } from '@mui/material';
//Media
import { ReactComponent as Urgent } from '../assets/icons/priority/urgent.svg';
import { ReactComponent as High } from '../assets/icons/priority/high.svg';
import { ReactComponent as Medium } from '../assets/icons/priority/medium.svg';
import { ReactComponent as Low } from '../assets/icons/priority/low.svg';
import { ReactComponent as Bug } from '../assets/icons/issue/bug.svg';
import { ReactComponent as Task } from '../assets/icons/issue/task.svg';
import { ReactComponent as Macro } from '../assets/icons/issue/macro.svg';
//Types
import { ProjectTableRow } from '../types/types';
//Components
import { ProjectLabel } from '../components/Reusable/ProjectLabel/ProjectLabel';

const rows: ProjectTableRow[] = [
  {
    priority: <Urgent />,
    issue: <Bug />,
    id: 'wms-20',
    description: 'ut faucibus pulvinar elementum integer enim',
    label: <ProjectLabel color={'#61D26F'} name={'LD Website'} />,
  },
  {
    priority: <Urgent />,
    issue: <Task />,
    id: 'wms-11',
    description: 'est ante in nibh mauris',
    label: <ProjectLabel color={'#1FAAE9'} name={'Roundrush'} />,
  },
  {
    priority: <High />,
    issue: <Bug />,
    id: 'wms-1',
    description: 'volutpat blandit aliquam etiam erat velit',
    label: <ProjectLabel color={'#1FAAE9'} name={'Roundrush'} />,
  },
  {
    priority: <High />,
    issue: <Task />,
    id: 'wms-1',
    description: 'lacus sed turpis tincidunt id',
    label: <ProjectLabel color={'#61D26F'} name={'LD Website'} />,
  },
  {
    priority: <Medium />,
    issue: <Macro />,
    id: 'wms-28',
    description: 'dignissim diam quis enim lobortis scelerisque',
    label: <ProjectLabel color={'#7A6FEF'} name={'Marketing'} />,
  },
  {
    priority: <Low />,
    issue: <Bug />,
    id: 'wms-22',
    description: 'non quam lacus suspendisse faucibus',
    label: <ProjectLabel color={'#4086E0'} name={'Roundrush website'} />,
  },
  {
    priority: <Low />,
    issue: <Bug />,
    id: 'wms-22',
    description: 'nibh praesent tristique magna sit amet purus',
    label: <ProjectLabel color={'#4086E0'} name={'Roundrush website'} />,
  },
];

export default rows;
