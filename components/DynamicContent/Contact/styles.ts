import styled from "@emotion/styled";

export const ContactS = styled.div(({theme}) => `
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  .contact-info{
    min-height: 360px;
    background: #2a82a9;
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000033;
    display: flex;
    width: 100%;
    position: relative;
    z-index: 5;
    > *{
      margin: auto;
    }
  }
  .contact-form{
    width: 100%;
    position: relative;
    z-index: 100;
    padding: 60px 120px;
    &:before{
      content: '';
      background: #f6f4f2;
      border-radius: 6px;
      position: absolute;
      width: 110%;
      right: 0;
      top: 0;
      height: 100%;
      z-index: -1;
    }
    .contact-row{
      display: flex;
      gap: 15px;
      width: 100%;
    }
  }
`)