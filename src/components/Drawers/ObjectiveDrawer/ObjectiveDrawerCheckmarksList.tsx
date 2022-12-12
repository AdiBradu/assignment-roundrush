//Material UI
import { Stack } from '@mui/material';
//Components
import { ObjectiveDrawerCheckmarksItem } from './ObjectiveDrawerCheckmarksItem';
//Hardcoded data
import { checkmarks } from '../../../data/checkmarks';

export const ObjectiveDrawerCheckmarksList = () => {
  return (
    <Stack>
      {checkmarks.map((checkmark) => (
        <ObjectiveDrawerCheckmarksItem
          key={checkmark.name}
          name={checkmark.name}
        />
      ))}
    </Stack>
  );
};
