import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonS = styled(Button)(({theme}) => `
  &:hover{
    background-color: transparent!important;
  }
`)