import React from 'react';

import PotatoBanner from '~/assets/imgs/batata_01.png';

import { Container, Title, Description, Potato } from './styles';

export default function Banner() {
  return (
    <Container>
      <Title>Doce, Nutritiva e Deliciosa</Title>
      <Description>
        A chave da felicidade esta escondida nada Batata
      </Description>
      <Potato src={PotatoBanner} alt="Potato" />
    </Container>
  );
}
