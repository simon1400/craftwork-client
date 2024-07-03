import { Container, Typography } from "@mui/material"
import { HeaderTopS } from "./styles"
import { useQuery } from "@apollo/client"
import globalQuery from "queries/global"

const HeaderTop = () => {

  const {data, loading} = useQuery(globalQuery)

  if(loading) {
    return <></>
  }

  const global = data.global.data.attributes


  return (
    <HeaderTopS>
      <Container>
        <div className={'header-top-wrapper'}>
          <Typography component={'div'} variant="body2" className="header-top-content" dangerouslySetInnerHTML={{__html: global.headerLine}} />
        </div>
      </Container>
    </HeaderTopS>
  )
}

export default HeaderTop