import { FieldS } from "./styles"

export const Input = ({
  value, 
  onChange, 
  placeholder, 
  name, 
  type = 'text',
  field
}: {
  value: string; 
  onChange: (e: any) => void; 
  placeholder: string; 
  name: string; 
  type?: string;
  field: string;
}) => {
  return (
    <FieldS>
      {field === 'input' && <input value={value} onChange={onChange} placeholder={placeholder} name={name} type={type} />}
      {field === 'textarea' && <textarea value={value} onChange={onChange} placeholder={placeholder} name={name} />}
    </FieldS>
  )
}