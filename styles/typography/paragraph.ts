export const paragraph = (theme: any) => ({
  a: {
    position: "relative",
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontWeight: 600,
    transition: "all .2s ease",
    "&:after": {
      content: "''",
      display: "block",
      width: "100%",
      height: "1.5px",
      background: theme.palette.primary.main,
      position: "absolute",
      bottom: "-3px",
      left: 0,
      transition: "all .2s ease",
    },
    "&:hover":{
      "&:after": {
        height: "4px"
      }
    },
    // "&:hover": {
    //   color: theme.palette.primary.main,
    // }
  }
})