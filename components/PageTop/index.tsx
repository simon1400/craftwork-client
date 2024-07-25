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
  content,
  cta
}) => {

  const router = useRouter()

  return (
    <PageTopS>
      <Image src={APP_API+imageUrl} fill alt={title}/>
      <Container maxWidth="md">
        <div className="m-head">
          {smallTitle && <Typography variant="h2">{smallTitle}</Typography>}
          <Typography variant="h1">{title}</Typography>
          {content && <Typography
            textAlign="center"
            variant={'body2'}
            component="div"
            marginTop={6}
            marginBottom={6}
            paddingRight={8}
            paddingLeft={8}
            dangerouslySetInnerHTML={{ __html: content }}
          />}
          {cta && <Cta onClick={() => router.push(cta.link)}>{cta.text}</Cta>}
        </div>
      </Container>
    </PageTopS>
  )
}

export default PageTop