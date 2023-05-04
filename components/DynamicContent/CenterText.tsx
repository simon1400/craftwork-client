import { Container, Typography } from "@mui/material"
import { FC } from "react"

const CenterText: FC<{content: string}> = ({content}) => {
  return (
    <Container maxWidth="md">
      <Typography
        textAlign="center"
        component="div"
        marginTop={12}
        marginBottom={12}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  )
}

export default CenterText