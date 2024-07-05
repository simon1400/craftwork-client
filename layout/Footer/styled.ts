import styled from "@emotion/styled";

export const FooterS = styled.footer(({theme}) => `
  background: ${theme.palette.primary.main};
  padding: 120px 0;
  padding-top: 263px;
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
    a{
      color: rgba(255, 255, 255, .75);
      font-weight: 400;
      &:hover{
        text-decoration: underline;
      }
    }
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

export const FooterTopS = styled.div(({theme}) => `
  padding: 60px 80px;
  background: #f18700;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 6px;
  margin-bottom: -90px;
  z-index: 1000;
  position: relative;
  display: flex;
  gap: 40px;
  > p{
    color: white;
    width: 100%;
    a{
      color: white;
    }
  }
  .function-btn{
    min-width: 320px;
    input{
      margin-bottom: 10px;
    }
    p{
      color: white;
      font-size: 13px;
      a{
        color: white;
      }
    }
  }
`)