//Material UI
import { styled } from '@mui/system';
import { TextField, InputAdornment } from '@mui/material';
//Media
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

const StyledInputSearch = styled(TextField)(() => ({
  borderRadius: '4px',
  backgroundColor: '#fff',
  '& .MuiInputLabel-root': {
    display: 'none',
  },
  '& .MuiInputBase-root': {
    width: '193px',
    paddingRight: '8px',
  },
  '& .MuiInputBase-input': {
    padding: '6px 8px',
    fontSize: '14px',
    lineHeight: '20px',
    width: '100%',
    '&::placeholder': {
      color: '#ADB0B8',
      fontFamily: 'Rubik',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    top: '0px',
    border: '2px solid #4C84FF',
  },
}));

export const InputSearch: React.FC = () => {
  return (
    <form>
      <StyledInputSearch
        label={'search'}
        id="search"
        name="search"
        type={'search'}
        placeholder="Choose something"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
