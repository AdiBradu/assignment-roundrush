import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    login: true;
    register: true;
    save: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pageheading: true;
    tableCellName: true;
    tableCellEmail: true;
    tableCellStatus: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    owner: true;
  }
}

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'pageheading' },
          style: {
            fontFamily: 'Rubik',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '28.44px',
          },
        },
        {
          props: { variant: 'tableCellName' },
          style: {
            fontFamily: 'Rubik',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '19px',
            color: '#31394E',
            marginLeft: '26px',
          },
        },
        {
          props: { variant: 'tableCellEmail' },
          style: {
            fontFamily: 'Rubik',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '16px',
            color: '#838895',
          },
        },
        {
          props: { variant: 'tableCellStatus' },
          style: {
            fontFamily: 'Rubik',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '16px',
            color: '#838895',
            textAlign: 'center',
          },
        },
      ],
    },
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
        {
          props: { variant: 'register' },
          style: {
            background: '#29C293',
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
              background: '#29C293',
            },
          },
        },
        {
          props: { variant: 'save' },
          style: {
            background: '#4c84ff',
            borderRadius: '6px',
            color: '#ffffff',
            textTransform: 'capitalize',
            padding: '6px 24px',
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Rubik',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          color: '#31394E',
          '::placeholder': {
            fontFamily: 'Rubik',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            color: '#ADB0B8',
          },
        },
        input: {
          padding: '0px',
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 100px rgba(0,0,0,0) inset',
            '-webkit-text-fill-color': '#ADB0B8',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: '#000',
          },
          '& label': {
            transform: 'none',
            color: '#ADB0B8',
            position: 'relative',
            fontFamily: 'Rubik',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '14px',
            marginLeft: '8px',
            marginBottom: '12px',
          },
          '& legend': {
            display: 'none',
          },
          '::placeholder': {
            color: '#ADB0B8',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: '#5A6171',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          fontFamily: 'Rubik',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '14px',
          '&.Mui-checked': {
            color: '#4c84ff',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          height: '100%',
          background: '#31394E',
          padding: '24px 0px',
          color: '#fff',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: 'Rubik',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'owner' },
          style: {
            backgroundColor: '#BFEDDF',
            color: '#29C293',
            fonFamily: 'Rubik',
            fonWeight: 400,
            fontSize: '12px',
            lineHeight: '14px',
            textAlign: 'center',
            borderRadius: '6px',
            marginLeft: '66px',
            padding: '5px 16px',
          },
        },
      ],
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          border: 0,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 0,
          background: 'transparent',
          color: 'inherit',
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          '&.Mui-expanded': {
            minHeight: 'auto',
          },
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
  },
});

export default theme;
