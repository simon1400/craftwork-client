import { DynamicContentS } from "./styled"
import { FC } from "react"
import ComponentIcons from "./Icons"
import ComponentClients from "./Clients"
import ComponentShortArticles from "./ShortArticles"
import ComponentBigImage from "./BigImage"
import ComponentSmall from "./SmallItem"
import CenterText from "./CenterText"
import SingleCarousel from "./SingleSlider"
import Carousel from "./Slider"
import Contact from "./Contact"
import SmallItemWrap from "./SmallItemsWrap"
import ContactBlock from "./ContactBlock"
import Wisiwig from "./Wisiwig"

const DynamicContent: FC<IDynamicContent> = ({data}) => {
  return (
    <DynamicContentS>
      {data.__typename === "ComponentContentIcons" && <ComponentIcons icon={data.icon} />}
      {data.__typename === "ComponentContentShortArticle" && <ComponentShortArticles articles={data.articles} />}
      {data.__typename === "ComponentContentClients" && <ComponentClients data={data} />}
      {data.__typename === "ComponentContentBigImage" && <ComponentBigImage image={data.image} />}
      {data.__typename === "ComponentContentCenterContent" && <ComponentSmall items={data.items} />}
      {data.__typename === "ComponentContentCenterText" && <CenterText content={data.content} />}
      {data.__typename === "ComponentContentSlider" && <SingleCarousel slides={data.item} />}
      {data.__typename === "ComponentContentCarousel" && <Carousel items={data.item} />}
      {data.__typename === "ComponentContentContactForm" && <Contact {...data} />}
      {data.__typename === "ComponentContentContactBlock" && <ContactBlock {...data} />}
      {data.__typename === "ComponentContentSignpost" && <SmallItemWrap item={data.item} />}
      {data.__typename === "ComponentContentWisiwig" && <Wisiwig content={data.contentWisiwig} />}
    </DynamicContentS>
  )
}

export default DynamicContent