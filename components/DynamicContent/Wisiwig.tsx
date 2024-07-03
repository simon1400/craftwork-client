import { Container, Typography } from "@mui/material"
import { WisiwigS } from "./styled"
import { FC } from "react"

const Wisiwig: FC<{content: string}> = ({content}) => {
  return (
    <Container maxWidth="md">
      <WisiwigS>
        <Typography variant={'body2'} component={'div'} dangerouslySetInnerHTML={{__html: content}} />
      </WisiwigS>
    </Container>
  )
}

export default Wisiwig