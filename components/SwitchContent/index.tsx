import { Typography } from "@mui/material"
import { SwitchContentS } from "./styles"
import Image from "next/image"
import { FC } from "react"
import Link from "next/link"

const APP_API = process.env.APP_API

const SwitchContent: FC<{posts: any}> = ({posts}) => {
  return (
    <SwitchContentS>
      {!!posts.length && posts.map((item: any, idx: number) => <div key={idx} className={'switch-item'}>
        <div className="switch-content">
          <Link href={`/blog/${item.slug}`}><Typography variant="h2">{item.title}</Typography></Link>
          <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: item.content}} />
          <Link className={'cta'} href={`/blog/${item.slug}`}>{'ČÍST DÁL'}</Link>
        </div>
        <div className="switch-img">
          <Link href={`/blog/${item.slug}`}><Image src={APP_API+item.image.data.attributes.url} fill alt="slider" /></Link>
        </div>
      </div>)}
    </SwitchContentS>
  )
}

export default SwitchContent
