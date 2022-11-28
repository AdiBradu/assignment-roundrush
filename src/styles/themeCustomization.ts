import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    login: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'login' },
          style: {
            background: '#4c84ff',
            borderRadius: '6px',
            color: '#ffffff',
            textTransform: 'capitalize',
            padding: '14px 0px',
            fontFamily: 'Rubik',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '0px',
            textAlign: 'center',
            ':hover': {
              background: '#4c84ff',
            },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: 'Rubik',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          color: '#ADB0B8',
          padding: '10px 8px',
          '::placeholder': {
            fontFamily: 'Rubik',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            color: '#ADB0B8',
          },
        },
      },
    },
  },
});

export default theme;
