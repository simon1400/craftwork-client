import Link from "next/link";
import { NavS } from "./styled";
import { FC } from "react";

const Nav: FC<{ data: ITopNav[] }> = ({ data }) => {
  return (
    <NavS>
      <ul>
        {data.map((item: any, idx: number) => (
          <li key={idx}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </NavS>
  );
};

export default Nav;
