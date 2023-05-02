import styled from "@emotion/styled";

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 430px;
  overflow: hidden;
  img{
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
  &:before {
    content: '';
    display: block;
    width: 300px;
    height: 200px;
    background: white;
    position: absolute;
    left: -180px;
    top: -60px;
    z-index: 2;
    transform: rotate(-60deg);
  }
  &:after {
    content: '';
    display: block;
    width: 300px;
    height: 200px;
    background: white;
    position: absolute;
    right: -180px;
    bottom: -60px;
    z-index: 2;
    transform: rotate(-60deg);
  }
`