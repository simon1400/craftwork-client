import { Container, Grid, useMediaQuery } from "@mui/material"
import IconItem from "components/IconItem"
import { FC } from "react"

const ComponentIcons: FC<{icon: IComponentIcon[]}> = ({icon}) => {

  const mediaMd = useMediaQuery('(max-width:940px)');

  return (
    <Container maxWidth="lg">
      <Grid container spacing={mediaMd ? 4 : 16} justifyContent="center">
        {icon.map((item: any, idx: number) => <Grid key={idx} item xs={6} md={3}>
          <IconItem data={item} />
        </Grid>)}
      </Grid>  
    </Container>
  )
}

export default ComponentIcons