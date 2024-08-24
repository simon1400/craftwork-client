import { Input } from "components/Filed"
import { MailButtonS } from "./styles"

const MailButton = () => {
  return (
    <MailButtonS>
      <Input 
        name="email"
        onChange={() => console.log('name')}
        value=""
        type="email"
        field="input"
        placeholder="Zadejte e-mail"
      />
      <button>{'ODESLAT'}</button>
    </MailButtonS>
  )
}

export default MailButton