import React from 'react';

import LogoSvg from '~/assets/logo.svg';

import { Container, Logo, Nav, NavItem } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo href="/">
        <img src={LogoSvg} alt="Potato" /> Potato
      </Logo>
      <Nav>
        <NavItem>
          <a href="/#">Sobre</a>
        </NavItem>
        <NavItem>
          <a href="/#">Nutrição</a>
        </NavItem>
        <NavItem>
          <a href="/#">Características</a>
        </NavItem>
        <NavItem>
          <a href="/#" className="button">
            Comprar
          </a>
        </NavItem>
      </Nav>
    </Container>
  );
}
