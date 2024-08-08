import { gql } from "@apollo/client";

export const blogPageQuery = gql`
  query BlogPage {
    blogPage {
      data {
        attributes {
          title
          image{
            data{
              attributes{
                url
              }
            }
          }
          description
          meta{
            title
            description
          }
        }
      }
    }
  }
`

export const postsQuery = gql`
  query Posts {
    posts {
      data {
        attributes {
          title
          slug
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
    }
  }
`

export const getPost = gql`
  query getPost($slug: String!) {
    posts(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          content
          image{
            data{
              attributes{
                url
              }
            }
          }
          meta{
            title
            description
          }
          components {
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
                url
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
`