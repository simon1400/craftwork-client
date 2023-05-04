import { Grid, Typography, useMediaQuery } from "@mui/material"
import { ArticleS } from "./styled"
import Image from "next/image"
import { ImgWrap } from "styles/imag-wrap"
import Link from "next/link"
import { FC } from "react"

const APP_API = process.env.APP_API

const Article: FC<{data: IArticleShort, idx: number}> = ({data, idx}) => {

  const mediaMd = useMediaQuery("(max-width: 940px)")

  // spacing={mediaMd ? 6 : 12}

  return (
    <ArticleS>
      <Grid container alignItems="center" flexDirection={idx % 2 ? 'row-reverse' : 'row'}>
        <Grid item xs={12} md={6}>
          <div className="content-wrap">
            <Typography variant="h2">{data.title}</Typography>
            <Typography component="div" variant="body2" dangerouslySetInnerHTML={{__html: data.content}} />
            {data.link && <Link className="more" href={data.link.link}>{data.link.text}</Link>}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImgWrap>
            <Image src={APP_API+data.image.data.attributes.url} fill alt={data.title} />
          </ImgWrap>
        </Grid>
      </Grid>
    </ArticleS>
  )
}

export default Article