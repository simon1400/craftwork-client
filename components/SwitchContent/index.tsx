import { Typography } from "@mui/material"
import { SwitchContentS } from "./styles"
import Image from "next/image"
import { FC } from "react"
import Link from "next/link"

const SwitchContent: FC<{posts: any}> = ({posts}) => {
  return (
    <SwitchContentS>
      {!!posts.length && posts.map((item: any, idx: number) => <div key={idx} className={'switch-item'}>
        <div className="switch-content">
          <Typography variant="h2">{item.title}</Typography>
          <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: item.content}} />
          <Link className={'cta'} href={`/blog/${item.slug}`}>{'ČÍST DÁL'}</Link>
        </div>
        <div className="switch-img">
          <Image src="/img/article.webp" fill alt="slider" />
        </div>
      </div>)}
    </SwitchContentS>
  )
}

export default SwitchContent
