// React Theme — extracted from https://byo3.it/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '18': string;
    '20': string;
    '22': string;
    '25': string;
    '30': string;
    '35': string;
    '36': string;
    '40': string;
 *   };
 *   space: {
    '2': string;
    '20': string;
    '24': string;
    '30': string;
    '40': string;
    '50': string;
    '56': string;
    '60': string;
    '80': string;
    '144': string;
    '150': string;
    '241': string;
 *   };
 *   radii: {
    sm: string;
    full: string;
 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#00588a",
    "secondary": "#e8a732",
    "accent": "#d65e53",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#212121",
    "neutral100": "#000000",
    "neutral200": "#33373d",
    "neutral300": "#ffffff",
    "neutral400": "#69727d",
    "neutral500": "#7a7a7a",
    "neutral600": "#f5f5f5",
    "neutral700": "#2d2d2d"
  },
  "fonts": {
    "body": "'Poppins', sans-serif"
  },
  "fontSizes": {
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "25": "25px",
    "30": "30px",
    "35": "35px",
    "36": "36px",
    "40": "40px"
  },
  "space": {
    "2": "2px",
    "20": "20px",
    "24": "24px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "56": "56px",
    "60": "60px",
    "80": "80px",
    "144": "144px",
    "150": "150px",
    "241": "241px"
  },
  "radii": {
    "sm": "3px",
    "full": "100px"
  },
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#00588a",
      "light": "hsl(202, 100%, 42%)",
      "dark": "hsl(202, 100%, 12%)"
    },
    "secondary": {
      "main": "#e8a732",
      "light": "hsl(39, 80%, 70%)",
      "dark": "hsl(39, 80%, 40%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#00588a"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#212121"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "35px",
      "fontWeight": "300",
      "lineHeight": "35px"
    },
    "h2": {
      "fontSize": "25px",
      "fontWeight": "300",
      "lineHeight": "25px"
    },
    "h3": {
      "fontSize": "22px",
      "fontWeight": "400",
      "lineHeight": "33px"
    }
  },
  "shape": {
    "borderRadius": 3
  },
  "shadows": []
};

export default theme;
