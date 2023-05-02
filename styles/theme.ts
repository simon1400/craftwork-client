import { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles';
import {createTheme} from '@mui/material'
import { typography } from './typography';
import { components } from './components';
import { IBorderRadius, IGlobalGap, IGlobalPadding } from './types';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 980,
      lg: 1200,
      xl: 1440,
      xxl: 1920
    },
  },
  palette: {
    primary: {
      main: "#2a82a9"
    },
    text: {
      secondary: "#000000",
      primary: "rgba(0, 0, 0, .75)"
    }
  },
  typography: {
    fontFamily: "din-2014",
  },
  spacing: 5
})

const themeOption: ThemeOptions = {
  components: components(theme),
  typography: typography(theme)
}

theme = createTheme(theme, themeOption)

export default theme;

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    borderRadius: IBorderRadius;
    globalGap: IGlobalGap;
    globalPadding: IGlobalPadding;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}