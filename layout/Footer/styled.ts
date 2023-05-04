import styled from "@emotion/styled";

export const FooterS = styled.footer(({theme}) => `
  background: ${theme.palette.primary.main};
  padding: 120px 0;
  text-align: center;
  color: rgba(255, 255, 255, .75);
  h3{
    color: white;
    margin-bottom: 20px;
  }
  p{
    color: rgba(255, 255, 255, .75);
    margin: 0;
    padding: 0;
  }
  ul{
    margin: 0;
    padding: 0;
    li{
      a{
        color: rgba(255, 255, 255, .75);
        text-decoration: none;
        font-size: 20px;
        line-height: 30px;
        ${theme.breakpoints.down('md')} {
          font-size: 15px;
        }
      }
    }
  }
`)