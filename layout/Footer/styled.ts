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
      margin-top: 0;
      margin-bottom: 0;
      a{
        color: white;
      }
    }
  }
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    padding: 30px;
    gap: 20px;
    .function-btn{
      min-width: 20px;
      width: 100%;
    }
  }
`)

export const ContactIconsS = styled.div(({theme}) => `
  ul{
    padding-top: 30px;
    li{
      display: inline-block;
      &:not(:first-of-type) {
        margin-left: 10px;
      }
      &:not(:last-of-type) {
        margin-right: 10px;
      }
      a{
        width: 28px;
        height: 28px;
      }
    }
  }
`)