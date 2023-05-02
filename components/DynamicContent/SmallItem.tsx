import { Container, Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { BigImage, SmallItem } from "./styled"

const APP_API = process.env.APP_API

const ComponentSmall: FC<{items: IComponentSmallItem[]}> = ({items}) => {
  return (
    <Container maxWidth="xs">
      {items.map((item: any, idx: number) => <SmallItem key={idx}>
        <Typography variant="h2">{item.title}</Typography>
        <Typography variant="body2" component="div" dangerouslySetInnerHTML={{__html: item.content}} />
      </SmallItem>)}
    </Container>
  )
}

export default ComponentSmall