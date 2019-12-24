import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import potatoImages from '~/assets/imgs';

import {
  Container,
  Title,
  Description,
  InformationBox,
  InformationPotato,
  InformationValuesBox,
  InformationText,
  PotatoBag,
  ParallaxBox,
} from './styles';

export default function Information() {
  return (
    <Container>
      <Title>
        <strong>Potato</strong> é saldável
      </Title>
      <Description>
        Sim, ela é! A maioria dos carboidratos das batatas são carboidratos
        complexos, a principal fonte de energia do seu corpo.
      </Description>
      <InformationBox>
        <InformationPotato src={potatoImages.batata_02} alt="Potato" />
        <InformationValuesBox>
          <InformationText>
            <strong>110</strong>Calorias
          </InformationText>
          <InformationText>
            <strong>26g</strong>Carboidrato
          </InformationText>
          <InformationText>
            <strong>3g</strong>Proteina
          </InformationText>
          <InformationText>
            <strong>0g</strong>Gordura
          </InformationText>
        </InformationValuesBox>
      </InformationBox>
      <ParallaxProvider>
        <PotatoBag>
          <ParallaxBox
            y={[-20, 30]}
            tagOuter="figure"
            styles={{ left: 0, top: 0 }}
          >
            <img src={potatoImages['saco-2']} alt="" />
          </ParallaxBox>
          <ParallaxBox
            y={[-10, 40]}
            tagOuter="figure"
            styles={{ left: 0, top: 0 }}
          >
            <img src={potatoImages['saco-2']} alt="" />
          </ParallaxBox>
        </PotatoBag>
      </ParallaxProvider>
    </Container>
  );
}
