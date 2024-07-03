import { Input } from "components/Filed"
import { MailButtonS } from "./styles"

const MailButton = () => {
  return (
    <MailButtonS>
      <Input 
        name="email"
        onChange={() => console.log('name')}
        value="some"
        type="email"
        field="input"
        placeholder="váš e-mail"
      />
      <button>{'ODESLAT'}</button>
    </MailButtonS>
  )
}

export default MailButton