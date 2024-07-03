import ContactLine from "components/DynamicContent/Contact/ContactLine"
import { ContactS } from "./styles"
import { Input } from "components/Filed"
import Cta from "components/cta"
import { FC, useState } from "react"
import { Container, Typography } from "@mui/material"

const Contact: FC<IContact> = ({title, phone, email, content}) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    text: ''
  })

  const handleChange = (name: string, value: any) => {
    setState({...state, [name]: value})
  }

  const handleSend = () => {

  }

  return (
    <Container>
      <Typography variant="h2" marginBottom={12} textAlign="center">{title}</Typography>
      <ContactS>
        <div className={'contact-info'}>
          <div>
            {content && <Typography variant={'body2'} component={'div'} dangerouslySetInnerHTML={{__html: content}} />}
            {phone && <ContactLine data={phone} type={'phone'} />}
            {email && <ContactLine data={email} type={'email'} />}
          </div>
        </div>
        <div className={'contact-form'}>
          <Input 
            name="name"
            onChange={(e: any) => handleChange('name', e.target.value)}
            value={state.name}
            type="text"
            field="input"
            placeholder="jméno a přijmení"
          />
          <div className={'contact-row'}>
            <Input 
              name="email"
              onChange={(e) => handleChange('email', e.target.value)}
              value={state.email}
              type="text"
              field="input"
              placeholder="e-mail"
            />
            <Input 
              name="phone"
              onChange={(e) => handleChange('phone', e.target.value)}
              value={state.phone}
              type="text"
              field="input"
              placeholder="telefon"
            />
          </div>
          <Input 
            name="text"
            onChange={(e) => handleChange('text', e.target.value)}
            value={state.text}
            type="text"
            field="textarea"
            placeholder="vaše zpráva..."
          />
          <Cta onClick={() => handleSend()}>ODESLAT</Cta>
        </div>
      </ContactS>
    </Container>
  )
}

export default Contact