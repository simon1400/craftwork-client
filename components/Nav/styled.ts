import styled from "@emotion/styled";

export const NavS = styled.nav(({theme}) => `
  ul{
    margin: 0;
    padding: 0;
    li{
      display: inline-block;
      &:not(:last-of-type) {
        margin-right: 30px;
      }
      &:not(:first-of-type) {
        margin-left: 30px;
      }
      a{
        text-decoration: none;
        color: ${theme.palette.text.secondary};
        font-size: 14px;
        letter-spacing: 2.24px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
`) 