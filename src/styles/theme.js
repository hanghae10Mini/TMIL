import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#C9EFF9',
    },
    secondary: {
      main: '#07A4B5',
    },
    background: {
      main: '#fff',
      paper: '#F9FCFD',
    },
    text: {
      primary: '#000',
      secondary: '#868585',
    },
  },
});

export default theme;
