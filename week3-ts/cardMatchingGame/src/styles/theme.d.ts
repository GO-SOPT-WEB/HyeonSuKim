export interface ThemeColors {
    white: string;
    black: string;
    lightPurple: string;
    lightYellow: string;
    pink: string;
  }
  
  export interface Theme {
    colors: ThemeColors;
  }
  
  declare const theme: Theme;
  export default theme;
  