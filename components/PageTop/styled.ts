import styled from "@emotion/styled";

export const PageTopS = styled.section(({theme}) => `
  overflow: hidden;
  position: relative;
  background-color: ${theme.palette.text.secondary};
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
  }
  svg{
    width: 100%;
    height: auto;
    > * {
      backdrop-filter: blur(10px);
      background: white;
      fill: white;
      opacity: .4;
    }
  }
  h1{
    position: relative;
    color: white;
    margin-top: -65px;
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