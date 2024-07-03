import styled from "@emotion/styled";

export const FieldS = styled.div(({theme}) => `
  width: 100%;
  input, textarea {
    width: 100%;
    box-sizing: border-box;
    box-shadow: inset 0px 3px 6px #00000012;
    border: 1px solid #00000026;
    border-radius: 5px;
    background: white;
    padding: 12px 10px;
    font-size: 14px;
    color: #0000007F;
    font-family: ${theme.typography.fontFamily};
    font-weight: bold;
    margin-bottom: 15px;
    &:focus{
      outline: none;
    }
  }
  input{
    height: 41px;
  }
  textarea {
    height: 185px;
  }
`)