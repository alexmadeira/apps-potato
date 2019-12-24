import React from 'react';

import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Information from '~/components/Information';
import Sizes from '~/components/Sizes';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Sizes />
      <Information />
      <Footer />
    </Container>
  );
}
