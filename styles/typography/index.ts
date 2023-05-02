import { baseBody } from "./baseBody";
import { baseBody2 } from "./baseBody2";
import { baseHead } from "./baseHead";

export const typography = (theme: any) => ({
  body1: {
    ...baseBody(theme)
  },
  body2: {
    ...baseBody2(theme)
  },
  h1: {
    fontSize: "60px",
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '35px'
    },
  },
  h2: {
    fontSize: "35px",
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '24px'
    }
  },
  h3: {
    fontSize: "26px",
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '20px'
    }
  },
})