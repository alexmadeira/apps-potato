import styled from 'styled-components';

import { Parallax } from 'react-scroll-parallax';

import { Colors, Fonts, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  background: ${Colors.Backgrounds.Light};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${Colors.DarkShadow} 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 80%,
      ${Colors.DarkShadow} 100%
    );
  }
`;
export const ParallaxBox = styled(Parallax)`
  position: absolute;
  z-index: 10;
  ${props => props.styles || ''}
`;
export const ParallaxImage = styled.img`
  width: 100%;
  filter: blur(7px);
`;
export const Title = styled.h2`
  color: ${Colors.TextColor.Dark};
  font-size: ${Fonts.sizes.Bigger};
  font-weight: 100;
  margin: calc(${Spaces.BaseMargin} * 7) 0 ${Spaces.BaseMargin} 0;
`;

export const Description = styled.p`
  color: ${Colors.TextColor.Dark};
  font-size: ${Fonts.sizes.Middle};
  font-weight: 100;
  margin: 0 calc(${Spaces.BaseMargin} * 2);
`;

export const Separator = styled.div`
  width: 100%;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  display: flex;
  max-height: 60px;
  position: relative;
  margin-top: calc(${Spaces.BaseMargin} * 2);
  &::before {
    content: '';
    border-bottom: 1px solid #c2c2c2;
    width: 100%;
    position: absolute;
  }
  img {
    height: 60px;
    background: ${Colors.Backgrounds.Light};
    z-index: 1;
    padding: 0 calc(${Spaces.BasePadding} * 5);
  }
`;

export const Spotligth = styled.div`
  margin-top: calc(${Spaces.BaseMargin} * 4);
  img {
    max-width: 40vw;
  }
`;
