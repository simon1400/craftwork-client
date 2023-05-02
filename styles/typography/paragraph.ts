export const paragraph = (theme: any) => ({
  a: {
    position: "relative",
    color: "rgba(0, 0, 0, .8)",
    textDecoration: "none",
    transition: "all .2s ease",
    borderBottom: `1.5px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  }
})