import React, { useState } from 'react';
import { Navbar, Nav, Logo, Menu, Link, NavToggle } from './styles';

import logoImg from '../../assets/image/logo.svg';

const Header = () => {
  const [open, setOpen ] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return(
    <Navbar>
      <Nav>
        <Logo>
          <img src={logoImg} alt="Emanuele Correa"/>
        </Logo>
        <Menu open={open}>
          <Link active>Sobre</Link>
          <Link>Projetos</Link>
          <Link>Skill</Link>
          <Link>Repositorios</Link>
          <Link >Contato</Link>
        </Menu>
        <NavToggle open={open} onClick={handleToggle}>
          <span></span>
        </NavToggle>
      </Nav>
    </Navbar>
  );
}

export default Header;