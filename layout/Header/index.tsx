import { Container, useMediaQuery } from "@mui/material";
import { HeaderS, MobileNav } from "./styled";
import Logo from "components/Logo";
import Nav from "components/Nav";
import { useQuery } from "@apollo/client";
import navTopQuery from "queries/nav";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";


const Header = () => {

  const [nav, setNav] = useState([])

  const {data, loading} = useQuery(navTopQuery)
  const mediaMd = useMediaQuery("(max-width: 940px)")

  useEffect(() => {
    if(!loading) {
      setNav(data.navigation.data.attributes.topNav)
    }
  }, [loading])

  const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <HeaderS>
        <Logo />
        {!!nav.length && !mediaMd && <Nav data={nav} />}
        {mediaMd && <Hamburger toggled={isOpen} toggle={setOpen} />}
        {mediaMd && <MobileNav open={isOpen}>
          <Nav data={nav} />
        </MobileNav>}
      </HeaderS>
    </Container>
  );
};

export default Header;
