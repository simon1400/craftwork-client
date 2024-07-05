import { ContactLineS } from "./styles"
import PhoneIcon from '../../../../public/img/phone-light.svg'
import EnvelopeIcon from '../../../../public/img/envelope-light.svg'
import { FC } from "react"

const ContactLine: FC<{data: string, type: string}> = ({data, type}) => {
  return (
    <ContactLineS href={`${type === 'phone' ? 'tel:' : 'mailto:'}${data}`}>
      {type === 'phone' && <PhoneIcon />}
      {type === 'email' && <EnvelopeIcon />}
      <span>{data}</span>
    </ContactLineS>
  )
}

export default ContactLine