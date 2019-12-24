import styled from 'styled-components';

import { Colors, Fonts } from '~/styles/Metrics';
import Spaces from '~/styles/Metrics/spaces';

export const Container = styled.div`
  background: ${Colors.Backgrounds.Banner};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const Title = styled.h1`
  color: ${Colors.TextColor.Light};
  font-size: ${Fonts.sizes.Bigger};
`;

export const Description = styled.p`
  color: ${Colors.TextColor.Light};
  font-size: ${Fonts.sizes.Middle};
`;

export const Potato = styled.img`
  max-width: 50vw;
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;
