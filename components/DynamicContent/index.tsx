import { DynamicContentS } from "./styled"
import { FC } from "react"
import ComponentIcons from "./Icons"
import ComponentClients from "./Clients"
import ComponentShortArticles from "./ShortArticles"
import ComponentBigImage from "./BigImage"
import ComponentSmall from "./SmallItem"

const DynamicContent: FC<IDynamicContent> = ({data}) => {
  return (
    <DynamicContentS>
      {data.__typename === "ComponentContentIcons" && <ComponentIcons icon={data.icon} />}
      {data.__typename === "ComponentContentShortArticle" && <ComponentShortArticles articles={data.articles} />}
      {data.__typename === "ComponentContentClients" && <ComponentClients data={data} />}
      {data.__typename === "ComponentContentBigImage" && <ComponentBigImage image={data.image} />}
      {data.__typename === "ComponentContentCenterContent" && <ComponentSmall items={data.items} />}
    </DynamicContentS>
  )
}

export default DynamicContent