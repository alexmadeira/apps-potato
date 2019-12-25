import React, { useState } from 'react';

import LogoSvg from '~/assets/logo.svg';

import { Container, Logo, Hamburguer, Nav, NavItem } from './styles';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <Logo onClick={() => setMenuOpen(!menuOpen)}>
        <img src={LogoSvg} alt="Potato" /> Potato
        <Hamburguer />
      </Logo>
      <Nav className={menuOpen && 'open'}>
        <NavItem>
          <a href="/#">Sobre</a>
        </NavItem>
        <NavItem>
          <a href="/#">Nutrição</a>
        </NavItem>
        <NavItem>
          <a href="/#">Características</a>
        </NavItem>
        <NavItem className="button">
          <a href="/#">Comprar</a>
        </NavItem>
      </Nav>
    </Container>
  );
}
