import styled from "@emotion/styled";

export const ArticleS = styled.div(({theme}) => `
  margin-bottom: 30px;
  margin-top: 30px;
  h2{
    margin-bottom: 30px;
  }
  .more{
    display: inline-block;
    color: ${theme.palette.primary.main};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2.24px;
    font-size: 14px;
    margin-top: 30px;
    font-weight: 600;
    position: relative;
    &:after{
      content: '';
      display: block;
      width: 100%;
      height: 1.5px;
      background: ${theme.palette.primary.main};
      position: absolute;
      bottom: -5px;
      left: 0;
    }
  }
  ${theme.breakpoints.down('md')} {
    margin-bottom: 60px;
    > .MuiGrid-root {
      flex-direction: column-reverse;
      >.MuiGrid-root {
        width: 100%;
      }
    }
    /* .MuiGrid-container{
      margin-right: 0;
    } */
  }
`)