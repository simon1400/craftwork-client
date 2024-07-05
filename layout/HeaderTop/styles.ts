import styled from "@emotion/styled";

export const HeaderTopS = styled.div(({theme}) => `
  width: 100%;
  padding: 6px 0;
  background: #2a82a9;
  .header-top-wrapper{
    display: flex;
    justify-content: end;
    .header-top-content{
      > * {
        color: white;
        margin: 0;
        font-size: 15px;
      }
      a{
        color: white;
      }
    }
  }
`)