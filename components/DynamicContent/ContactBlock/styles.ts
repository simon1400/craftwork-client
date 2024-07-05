import styled from "@emotion/styled";

export const ContactBlockS = styled.div(({theme}) => `
  margin-bottom: 60px;
  .item-content{
    display: flex;
    align-items: center;
    height: 100%;
    .cta{
      display: inline-block;
      color: ${theme.palette.primary.main};
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2.24px;
      font-size: 14px;
      /* margin-top: 30px; */
      font-weight: 600;
      position: relative;
      &:after{
        content: '';
        display: block;
        width: 100%;
        height: 1.5px;
        background: ${theme.palette.primary.main};
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: all .2s ease;
      }
      &:hover{
        &:after{
          height: 4px;
        }
      }
    }
  }
  .item-img{
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    width: 100%;
    img{
      object-fit: cover;
    }
  }
  .item-map{
    iframe{
      max-width: 100%;
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1; 
    }
  }
`)