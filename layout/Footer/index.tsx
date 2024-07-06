import { Container, Grid, Typography, useMediaQuery } from "@mui/material"
import { FooterS, FooterTopS } from "./styled"
import { useQuery } from "@apollo/client"
import footerQuery from "queries/footer"
import MailButton from "components/MailButton"
import globalQuery from "queries/global"
import ContactIcons from "./ContactIcons"

const Footer = () => {

  const {data, loading} = useQuery(footerQuery)
  const {data: globalData, loading: loadingData} = useQuery(globalQuery)
  const mediaMd = useMediaQuery("(max-width: 940px)")

  if(loading || loadingData) {
    return <></>
  }

  const footer = data.footer.data.attributes
  const global = globalData.global.data.attributes

  return (
    <>
      <Container>
        <FooterTopS>
          <Typography variant="body1">{global.footerBanerText}</Typography>
          <div className={'function-btn'}>
            <MailButton />
            <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: global.gdpr}}/>
          </div>
        </FooterTopS>
      </Container>
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
              <ContactIcons data={global.iconsLink} />
            </Grid>
          </Grid>
        </Container>
      </FooterS>
    </>
    
  )
}

export default Footer