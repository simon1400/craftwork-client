import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CtaS = styled(Button)(({theme}) => `
  border-radius: 5px;
  background: #F18700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  padding: 16px 48px;
  color: black;
  font-size: 14px;
  letter-spacing: 2.24px;
  font-weight: bold;
  &:hover{
    background: #F18700;
  }
`)