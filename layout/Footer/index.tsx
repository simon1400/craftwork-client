import { Container, Grid, Typography, useMediaQuery } from "@mui/material"
import { FooterS } from "./styled"
import { useQuery } from "@apollo/client"
import footerQuery from "queries/footer"

const Footer = () => {

  const {data, loading} = useQuery(footerQuery)
  const mediaMd = useMediaQuery("(max-width: 940px)")

  if(loading) {
    return <></>
  }

  const footer = data.footer.data.attributes

  return (
    <FooterS>
      <Container>
        <Grid container spacing={mediaMd ? 12 : 0}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">{footer.footer1.title}</Typography>
            <Typography variant="body2" component="div" dangerouslySetInnerHTML={{__html: footer.footer1.content}} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">{footer.footer2.title}</Typography>
            <Typography variant="body2" component="div" dangerouslySetInnerHTML={{__html: footer.footer2.content}} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">{footer.footer3.title}</Typography>
            <Typography variant="body2" component="div" dangerouslySetInnerHTML={{__html: footer.footer3.content}} />
          </Grid>
        </Grid>
      </Container>
    </FooterS>
  )
}

export default Footer