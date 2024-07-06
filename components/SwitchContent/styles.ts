import styled from "@emotion/styled";

export const SwitchContentS = styled.div(({theme}) => `
  margin-top: 120px;
  margin-bottom: 120px;
  .switch-item{
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
      .switch-content{
        padding-left: 90px;
        &:before{
          right: 0;
        }
      }
      
    }
    &:nth-of-type(odd) {
      .switch-content{
        padding-right: 90px;
        &:before{
          left: 0;
        }
      }
    }
    .switch-img{
      width: 40%;
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 6px;
      position: relative;
      aspect-ratio: 1 / 1;
      z-index: 101;
      img{
        object-fit: cover;
      }
    }
    .switch-content{
      width: 100%;
      position: relative;
      z-index: 100;
      padding: 40px;
      a{
        text-decoration: none;
        h2{
          margin-bottom: 30px;
        }
      } 
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
      &:before{
        content: '';
        background: #f6f4f2;
        border-radius: 6px;
        position: absolute;
        width: 110%;
        top: 0;
        height: 100%;
        z-index: -1;
      }
    }
  }
`)