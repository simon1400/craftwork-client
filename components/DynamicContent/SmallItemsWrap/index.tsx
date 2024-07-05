import { Container, Grid } from "@mui/material"
import { FC } from "react"
import SmallItem from "../SmallBlockItem"

const SmallItemWrap: FC<ISmallItemWrap> = ({item}) => {

  if(!item?.length) {
    return null
  }

  return (
    <Container maxWidth="lg">
        <Grid container spacing={6} marginBottom={18} justifyContent="center">
          {item.map((item: ISmallItem, idx: number) => <Grid key={idx} item xs={6} md={3}>
            <SmallItem {...item} />
          </Grid>)}
        </Grid>  
      </Container>
  )
}

export default SmallItemWrap