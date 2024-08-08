import { Container, Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { SmallItemS } from "./styles"
import { useRouter } from "next/router"

const APP_API = process.env.APP_API

const SmallItem: FC<ISmallItem> = ({title, content, image, url}) => {

  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault();
    if(url) {
      router.push(url)
    }
  }

  return (
    <Container>
      <SmallItemS href={'/'} onClick={(e) => handleClick(e)}>
        <div style={{backgroundImage: `url(${APP_API+image.data.attributes.url})`}}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </SmallItemS>
    </Container>
  )
}

export default SmallItem