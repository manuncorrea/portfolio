import React, { useState } from 'react';
import { Navbar, Nav, Logo, Menu, LinkMenu, NavToggle } from './styles';
import { Link } from 'react-scroll';

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
          <LinkMenu active>Sobre</LinkMenu>
          <LinkMenu>
          <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            >
              Projetos
          </Link>
          </LinkMenu>
          <LinkMenu>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              Skill
            </Link>
          </LinkMenu>
          <LinkMenu>
            <Link
                activeClass="active"
                to="repositorios"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Repositorios
              </Link>
          </LinkMenu>
          <LinkMenu>
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              Contato
            </Link>
          </LinkMenu>
        </Menu>
        <NavToggle open={open} onClick={handleToggle}>
          <span></span>
        </NavToggle>
      </Nav>
    </Navbar>
  );
}

export default Header;