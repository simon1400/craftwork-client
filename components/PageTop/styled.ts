import styled from "@emotion/styled";

export const PageTopS = styled.section(({theme}) => `
  overflow: hidden;
  position: relative;
  background-color: ${theme.palette.text.secondary};
  margin-bottom: 60px;
  > img {
    object-fit: cover;
    object-position: center;
    opacity: .6;
    z-index: 1;
  }
  .m-head{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 540px;
    position: relative;
    z-index: 2;
    p, div{
      color: white;
    }
  }
  svg{
    width: 100%;
    height: auto;
    > * {
      backdrop-filter: blur(10px);
      background: white;
      fill: white;
      opacity: .25;
    }
  }
  h1{
    position: relative;
    color: white;
  }
  h2{
    font-size: 35px;
    color: white;
    font-weight: lighter;
    margin-bottom: 20px;
  }
  ${theme.breakpoints.down('md')} {
    .m-head{
      height: 355px;
    }
    svg{
      display: none;
    }
    h1{
      margin-top: 0;
      text-align: center;
      transform: translateY(30px);
    }
  }
`)