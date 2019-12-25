import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import icons from '~/assets/icons';
import potatoImages from '~/assets/imgs';

import {
  Container,
  Title,
  Description,
  Separator,
  Spotligth,
  ParallaxBox,
  ParallaxImage,
} from './styles';

export default function Sizes() {
  return (
    <ParallaxProvider>
      <Container>
        <ParallaxBox
          y={[-100, 50]}
          tagOuter="figure"
          className="hiddenMobile"
          styles={{ left: 0, top: 0, width: '300px' }}
        >
          <ParallaxImage src={potatoImages.batata_04} alt="" />
        </ParallaxBox>
        <ParallaxBox
          x={[-10, 20]}
          tagOuter="figure"
          styles={{
            right: '-200px',
            bottom: '-100px',
            width: '500px',
            transform: 'rotate(90deg)',
          }}
        >
          <ParallaxImage src={potatoImages.batata_03} alt="" />
        </ParallaxBox>
        <ParallaxBox
          y={[-100, 10]}
          tagOuter="figure"
          styles={{ left: '10vw', bottom: 0, width: '150px' }}
        >
          <ParallaxImage src={potatoImages.batata_03} alt="" />
        </ParallaxBox>

        <Title>Diferentes formatos e tamanhos</Title>
        <Description>
          <strong>Potato</strong> possui difersos formatos e tamanhos
          exclusivos. Encontre aquele que se adapte às suas preferências
          pessoais.
        </Description>
        <Separator>
          <img src={icons.potato1} alt="Separador Potato 1" />
          <img src={icons.potato4} alt="Separador Potato 4" />
          <img src={icons.potato2} alt="Separador Potato 2" />
          <img src={icons.potato3} alt="Separador Potato 3" />
          <img src={icons.potato4} alt="Separador Potato 4" />
          <img src={icons.potato2} alt="Separador Potato 2" />
        </Separator>
        <Spotligth>
          <img src={potatoImages.batata_05} alt="Spotligth Potato" />
        </Spotligth>
      </Container>
    </ParallaxProvider>
  );
}
