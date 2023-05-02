import { Container } from "@mui/material"
import Article from "components/Article"
import { FC } from "react"

const ComponentShortArticles: FC<{articles: IComponentArticles[]}> = ({articles}) => {
  return (
    <Container maxWidth="lg">
      {articles.map((item: any, idx: number) => <Article key={idx} idx={idx} data={item} />)}
    </Container>
  )
}

export default ComponentShortArticles