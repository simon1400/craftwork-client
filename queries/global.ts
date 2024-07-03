import { gql } from "@apollo/client";

const globalQuery = gql`
  query Global {
    global {
      data {
        attributes {
          headerLine
          footerBanerText
          gdpr
          iconsLink{
            link
            icon{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export default globalQuery