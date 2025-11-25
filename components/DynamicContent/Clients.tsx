import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const APP_API = process.env.APP_API

const ComponentClients: FC<{data: IComponentClients}> = ({data}) => {

  const mediaSm = useMediaQuery("(max-width: 640px)")

  return (
    <Container>
      <Box marginTop={12} marginBottom={12}>
        <Typography variant="h2" marginBottom={12} textAlign="center">{data.title}</Typography>
        <Grid container spacing={mediaSm ? 6 : 16} justifyContent="center">
          {data.images.data.map((item: any, idx: number) => <Grid key={idx} item xs={6} sm={4} md={3} textAlign="center">
            <Image style={{height: 'auto'}} src={APP_API+item.attributes.url} width={mediaSm ? "150" : "200"} height="100" alt="" />
          </Grid>)}
        </Grid>
      </Box>
    </Container>
  )
}

export default ComponentClients