import styled from "@emotion/styled";

export const SingleCarouselWrap = styled.div(({theme}) => `
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
    top: 50%;
    &:before, &:after{
      content: '';
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

export const ContentSliderS = styled.div(({theme}) => `
  padding: 0 120px;
  .wrap{
    background: #2a82a9;
    display: flex;
    height: 345px;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
  }
  .content{
    padding: 45px;
    width: 100%;
    * {
      font-size: 18px;
      color: white;
    }
  }
  .img{
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    position: relative;
    overflow: hidden;
    min-width: 40%;
    img{
      object-fit: cover;
    }
  }
`)