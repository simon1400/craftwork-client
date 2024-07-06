import styled from "@emotion/styled";

export const MailButtonS = styled.div(({theme}) => `
  max-width: 320px;
  position: relative;
  button{
    background: #2a82a9;
    border: none;
    box-shadow: 0px 3px 6px #00000033;
    border-radius: 3px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    position: absolute;
    right: 3px;
    top: 3px;
    height: 35px;
    width: 80px;
    font-weight: bold;
    font-family: ${theme.typography.fontFamily};
  }
`)