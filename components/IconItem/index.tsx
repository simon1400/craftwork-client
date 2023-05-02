import { Typography } from "@mui/material"
import { IconItemS } from "./styled"
import Image from "next/image"
import { FC } from "react"

const APP_API = process.env.APP_API

const IconItem: FC<{data: IIconItem}> = ({data}) => {
  return (
    <IconItemS>
      <Image src={APP_API+data.icon.data.attributes.url} width="60" height="60" alt="" />
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body2">{data.content}</Typography>
    </IconItemS>
  )
}

export default IconItem