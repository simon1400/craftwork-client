import Image from "next/image"
import { PageTopS } from "./styled"
import CraftworkIcon from 'public/img/cw-bckgr.svg'
import { Container, Typography } from "@mui/material"
import { FC } from "react"

const APP_API = process.env.APP_API

const PageTop: FC<IPageTop> = ({
  title,
  imageUrl
}) => {
  return (
    <PageTopS>
      <Image src={APP_API+imageUrl} fill alt={title}/>
      <Container maxWidth="xxl">
        <div className="m-head">
          <div className="test"></div>
          <CraftworkIcon />
          <Typography variant="h1">{title}</Typography>
        </div>
      </Container>
    </PageTopS>
  )
}

export default PageTop