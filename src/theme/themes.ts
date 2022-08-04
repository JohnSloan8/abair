import { blue, green } from '@mui/material/colors';
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
      main: green[600],
      dark: green[800],
    },
    secondary: {
      wafer: blue[50],
      light: blue[100],
      main: blue[600],
      dark: blue[800],
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
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
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
        default: '#fafafa',
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
