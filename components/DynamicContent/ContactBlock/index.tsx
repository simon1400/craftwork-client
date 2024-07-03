import { Container, Grid, Typography } from "@mui/material"
import { ContactBlockS } from "./styles"
import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

const ContactBlock: FC<IContactBlock> = ({
  title, map, description, cta, imagePoint
}) => {
  return (
    <ContactBlockS>
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <div className="item-content">
              <div>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: description}} />
                <Link className={'cta'} href={cta.link}>{cta.text}</Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="item-img">
              <Image src="/img/article.webp" fill alt="slider" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="item-map">
              <iframe src={map} style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ContactBlockS>
  )
}

export default ContactBlock