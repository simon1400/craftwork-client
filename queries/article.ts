import { gql } from "@apollo/client";

export const getArticle = gql`
  query getArticle($slug: String!) {
    articles(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          slug
          content
          meta{
            title
            description
          }
          image{
            data{
              attributes{
                url
              }
            }
          }
          components{
            ... on ComponentContentIcons{
              icon{
                title
                icon{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                content
              }
            }
            ... on ComponentContentClients{
              title
              images{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            ... on ComponentContentBigImage{
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            ... on ComponentContentCenterContent{
              items{
                title
                content
              }
            }
            ... on ComponentContentSlider{
              item{
                content
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentContentContactForm{
              title
              description
              phone
              email
            }
            ... on ComponentContentContactBlock{
              title
              description
              cta{
                text
                link
              }
              imagePoint{
                data{
                  attributes{
                    url
                  }
                }
              }
              map
            }
            ... on ComponentContentCarousel{
              item{
                title
                content
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentContentSignpost{
              item{
                title
                content
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentContentCenterText{
              content
            }
            ... on ComponentContentWisiwig{
              contentWisiwig
            }
            ... on ComponentContentShortArticle{
              articles{
                title
                content
                link{
                  text
                  link
                }
                image{
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
    }
  }
`;
