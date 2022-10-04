import { blue, green, orange, red } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { Themes } from './types';

const sharedTheme = {
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    primary: {
      wafer: green[50],
      light: green[100],
      medium: green[200],
      main: green[600],
      dark: green[800],
    },
    secondary: {
      wafer: blue[50],
      light: blue[100],
      medium: blue[200],
      main: blue[600],
      dark: blue[800],
    },
    warning: {
      wafer: red[50],
      light: red[100],
      medium: red[200],
      main: red[600],
      dark: red[800],
    },
    info: {
      wafer: orange[50],
      light: orange[100],
      medium: orange[200],
      main: orange[600],
      dark: orange[800],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fff',
        paper: '#fff',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        main: '#333',
      },
    },
  }),
};

export default themes;
