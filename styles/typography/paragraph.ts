export const paragraph = (theme: any) => ({
  a: {
    position: "relative",
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontWeight: 600,
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `1.5px solid ${theme.palette.primary.main}`,
    }
  }
})