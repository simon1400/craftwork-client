import { Typography } from "@mui/material"
import { ContentSliderS } from "./styles"
import Image from "next/image"
import { FC } from "react"


const APP_API = process.env.APP_API

interface IContentSlider {
  content: ISingleCarouselItem
}

const ContentSlider: FC<IContentSlider> = ({content}) => {
  return (
    <ContentSliderS>
      <div className="wrap">
        <div className={'content'}>
          <Typography variant="body1" component={'div'} dangerouslySetInnerHTML={{__html: content.content}} />
        </div>
        <div className={'img'}>
          <Image src={APP_API+content.image.data.attributes.url} fill alt="slider" />
        </div>
      </div>
    </ContentSliderS>
  )
}

export default ContentSlider