import { paragraph } from "./paragraph";

export const baseBody2 = (theme: any) => ({
  color: theme.palette.text.primary,
  fontSize: "20px",
  fontWeight: 300,
  lineHeight: "1.5",
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '15px'
  },
  p: paragraph(theme),
  ul: {
    padding: 0,
    li: {
      listStyleType: "none",
    }
  },
  ol: {
    paddingLeft: 0,
    listStyle: 'none',
    counterReset: 'item',
    li: {
      listStyleType: "none",
      paddingLeft: "29px",
      fontSize: '14px',
      position: "relative",
      lineHeilght: 1.5,
      counterIncrement: 'item',
      p: {
        marginTop: 0,
        marginBottom: 0,
      },
      "&:before": {
        content: `counter(item)"."`,
        display: "block",
        position: "absolute",
        fontWeight: 500,
        left: 0,
      }
    }
  },
})