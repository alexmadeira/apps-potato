import React from 'react';

import LogoSvg from '~/assets/logo.svg';

import { Container, Logo, Hamburguer, Nav, NavItem } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoSvg} alt="Potato" /> Potato
        <Hamburguer />
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
        <NavItem className="button">
          <a href="/#">Comprar</a>
        </NavItem>
      </Nav>
    </Container>
  );
}
