import { FC } from "react"
import { CtaS } from "./styled"

const Cta: FC<ICta> = ({children, ...rest}) => {
  return (
    <CtaS {...rest}>
      {children}
    </CtaS>
  )
}

export default Cta