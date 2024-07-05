import Image from "next/image"
import { PageTopS } from "./styled"
import { Container, Typography } from "@mui/material"
import { FC } from "react"
import Cta from "components/cta"
import { useRouter } from "next/navigation"

const APP_API = process.env.APP_API

const PageTop: FC<IPageTop> = ({
  title,
  imageUrl,
  smallTitle,
  cta
}) => {

  const router = useRouter()
  console.log(imageUrl)
  return (
    <PageTopS>
      <Image src={APP_API+imageUrl} fill alt={title}/>
      <Container maxWidth="xxl">
        <div className="m-head">
          <Typography variant="h1">{title}</Typography>
          {smallTitle && <Typography
            textAlign="center"
            variant={'body2'}
            component="div"
            marginTop={8}
            marginBottom={8}
            dangerouslySetInnerHTML={{ __html: smallTitle }}
          />}
          {cta && <Cta onClick={() => router.push(cta.link)}>{cta.text}</Cta>}
        </div>
      </Container>
    </PageTopS>
  )
}

export default PageTop