import React from 'react';

import Banner from '~/components/Banner';
import Header from '~/components/Header';
import Sizes from '~/components/Sizes';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Sizes />
    </Container>
  );
}
