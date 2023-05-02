import { FC } from "react"
import { ButtonS } from "./styled"

const Button: FC<IButton> = ({children, ...rest}) => {
  return (
    <ButtonS {...rest}>
      {children}
    </ButtonS>
  )
}

export default Button