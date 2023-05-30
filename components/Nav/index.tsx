import Link from "next/link";
import { NavS } from "./styled";
import { FC } from "react";
import { useRouter } from "next/router";

const Nav: FC<{ data: ITopNav[] }> = ({ data }) => {
  const router = useRouter()
  return (
    <NavS>
      <ul>
        {data.map((item: any, idx: number) => (
          <li className={router.asPath === item.link ? 'active' : ""} key={idx}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </NavS>
  );
};

export default Nav;
