export const baseHead = (theme: any) => ({
  fontWeight: "600",
  lineHeight: 1,
  color: theme.palette.text.secondary,
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
})