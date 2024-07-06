import styled from "@emotion/styled";

export const CarouselWrap = styled.div(({theme}) => `
  margin-bottom: 120px;
  .slick-arrow{
    width: 47px;
    height: 47px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #00000033;
    background: #2a82a9;
    color: white;
    z-index: 1000;
    display: flex!important;
    justify-content: center;
    top: 40%;
    &:before, &:after{
      content: '';
    }
    &.slick-disabled{
      opacity: .3;
      cursor: default;
    }
    svg{
      width: 16px;
      height: 14px;
      fill: white;
      margin: auto;
    }
  }
  .slider-item-c{
    text-align: center;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    .image-wrap{
      width: 100%;
      padding-top: 90%;
      overflow: hidden;
      position: relative;
      margin-bottom: 17px;
      img{
        object-fit: cover;
      }
    }
  }
`)