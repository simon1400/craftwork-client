import { Container, Grid, Typography, useMediaQuery } from "@mui/material"
import { FooterS } from "./styled"
import Link from "next/link"
// import Logo from 'public/assets/kersnerova-logo.svg'
// import Hardart from 'public/assets/hardart.svg'
// import globalQuery from "queries/global"
// import { useQuery } from "@apollo/client"
// import { useRouter } from "next/router"

const Footer = () => {

  // const router = useRouter()

  // const {data, loading} = useQuery(globalQuery, {
  //   variables: {locale: router.locale}
  // })

  // if(loading) {
  //   return <></>
  // }

  const mediaMd = useMediaQuery("(max-width: 940px)")

  return (
    <FooterS>
      <Container>
        <Grid container spacing={mediaMd ? 12 : 0}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Craftwork, s.r.o.</Typography>
            <Typography variant="body2" component="div"><p>Vídeňská 102/113 <br/>Dolní Heršpice<br/>619 00 Brno<br/>IČO 123456789</p></Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Craftwork, s.r.o.</Typography>
            <ul>
              <li>
                <Link href="/">O nás</Link>
              </li>
              <li>
                <Link href="/">O nás</Link>
              </li>
              <li>
                <Link href="/">O nás</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Craftwork, s.r.o.</Typography>
            <Typography variant="body2" component="div"><p>Vídeňská 102/113 <br/>Dolní Heršpice<br/>619 00 Brno<br/>IČO 123456789</p></Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterS>
  )
}

export default Footer