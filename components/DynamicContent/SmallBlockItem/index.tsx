import { Container, Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { SmallItemS } from "./styles"

const SmallItem: FC<ISmallItem> = ({title, content, image}) => {
  return (
    <Container>
      <SmallItemS>
        <div>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: content}} />
        </div>
        <div className="image-wrap">
          <Image src="/img/smallItem.png" fill alt="smallitem" />
        </div>
      </SmallItemS>
    </Container>
  )
}

export default SmallItem