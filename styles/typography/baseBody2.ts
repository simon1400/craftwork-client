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
  strong: {
    color: theme.palette.primary.main,
  },
  ul: {
    padding: 0,
    li: {
      listStyleType: "none",
      position: "relative",
      paddingLeft: "25px",
      "&:before": {
        content: "''",
        display: 'block',
        width: "15px",
        height: "1.5px",
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        left: 0,
        top: "16px"
      }
    }
  },
  ol: {
    paddingLeft: 0,
    listStyle: 'none',
    counterReset: 'item',
    li: {
      listStyleType: "none",
      paddingLeft: "25px",
      position: "relative",
      fontSize: "20px",
      lineHeilght: 1.5,
      counterIncrement: 'item',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px'
      },
      p: {
        marginTop: 0,
        marginBottom: 0,
      },
      "&:before": {
        content: `counter(item)"."`,
        display: "block",
        position: "absolute",
        color: theme.palette.primary.main,
        fontWeight: 600,
        left: 0,
      }
    }
  },
})