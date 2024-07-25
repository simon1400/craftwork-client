import styled from "@emotion/styled";

export const SmallItemS = styled.div(({theme}) => `
  min-height: 100px;
  background-color: #f6f4f2;
  padding: 30px 20px;
  padding-right: 0;
  width: 100%;
  display: flex;
  h3{
    margin-bottom: 15px;
    color: #2a82a9;
  }
  p{
    font-size: 18px;
  }
  .image-wrap{
    position: relative;
    width: 50%;
    display: block;
    min-width: 50%;
    margin-left: 10px;
    img{
      height: auto!important;
    }
  }
`)