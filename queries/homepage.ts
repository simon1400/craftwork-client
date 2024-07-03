import { gql } from "@apollo/client";

const homepageQuery = gql`
  query Homepage {
    homepage {
      data {
        attributes {
          title
          smallTitle
          cta{
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
          content
          meta{
            title
            description
          }
          Components{
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
              ... on ComponentContentWisiwig{
                contentWisiwig
              }
              ... on ComponentContentCenterText{
                content
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
`

export default homepageQuery