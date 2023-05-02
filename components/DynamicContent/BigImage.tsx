import { Container } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { BigImage } from "./styled"

const APP_API = process.env.APP_API

const ComponentBigImage: FC<{image: IImage}> = ({image}) => {
  return (
    <Container maxWidth="sm">
      <BigImage>
        <Image src={APP_API+image.data.attributes.url} fill alt="" />
      </BigImage>
    </Container>
  )
}

export default ComponentBigImage