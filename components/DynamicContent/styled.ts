import styled from "@emotion/styled";

export const DynamicContentS = styled.section(({theme}) => `
  
`)

export const BigImage = styled.div`
  margin-bottom: 60px;
  img{
    width: 100% !important;
    height: auto!important;
    position: relative!important;
  }
`

export const SmallItem = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2{
    margin-bottom: 30px;
  }
`

export const WisiwigS = styled.div(({theme}) => `
  margin-bottom: 60px;
  >div {
    h3{
      font-size: 25px;
    }
    p, ul li, ol li{
      font-size: 18px;
    }
    blockquote{
      padding: 40px 60px;
      background: #2a82a9;
      border-radius: 6px;
      margin: 30px 0;
      * {
        color: white;
      }
    }
    figure.table{
      margin: 30px 0;
      table{
        width: 100%;
        border-collapse: collapse; 
        tr{
          border-bottom: 1px solid #00000033;
          &:first-of-type{
            border-top: 1px solid #00000033;
          }
          td{
            padding-top: 20px;
            padding-bottom: 20px;
          }
        }
      }
    }
    
  }
`)