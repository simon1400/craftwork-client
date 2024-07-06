import { FC } from "react"
import { ContactIconsS } from "./styled"
import Image from "next/image"
import Link from "next/link"

const APP_API = process.env.APP_API

const ContactIcons: FC<{data: any}> = ({data}) => {
  return (
    <ContactIconsS>
      <ul>
        {data.length && data.map((item: any, idx: number) => <li key={idx}>
          <Link href={item.link}>
            <Image src={APP_API+item.icon.data.attributes.url} width={28} height={28} alt={'icons soc'} />
          </Link>
        </li>)}
      </ul>
    </ContactIconsS>
  )
}

export default ContactIcons