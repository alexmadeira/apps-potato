import styled from 'styled-components';

import { Parallax } from 'react-scroll-parallax';

import { Colors, Fonts, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  background: ${Colors.Backgrounds.Destaque};
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

export const Title = styled.h2`
  color: ${Colors.TextColor.Light};
  font-size: ${Fonts.sizes.Bigger};
  font-weight: 100;
  margin: calc(${Spaces.BaseMargin} * 7) 0 ${Spaces.BaseMargin} 0;
`;

export const Description = styled.p`
  color: ${Colors.TextColor.Light};
  font-size: ${Fonts.sizes.Middle};
  font-weight: 100;
`;

export const InformationBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-top: calc(${Spaces.BaseMargin} * 3);
  flex-direction: column;
`;

export const InformationPotato = styled.img`
  width: 30vw;
`;

export const InformationValuesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InformationText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Colors.TextColor.Light};
  font-size: ${Fonts.sizes.Middle};
  font-weight: 100;
  margin: 0 calc(${Spaces.BaseMargin} * 2);
  strong {
    font-weight: 100;
    font-size: ${Fonts.sizes.Bigger};
  }
`;

export const PotatoBag = styled.div`
  filter: blur(7px);
  display: flex;
  width: calc(100% + 600px);
  position: absolute;
  left: -300px;
  bottom: -400px;
  justify-content: space-between;
  align-items: flex-end;
`;
export const ParallaxBox = styled(Parallax)`
  ${props => props.styles || ''}
  img {
    max-width: 600px;
  }
`;
