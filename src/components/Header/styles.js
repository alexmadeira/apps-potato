import styled from 'styled-components';

import { Spaces, Colors, Fonts, Breakpoints } from '~/styles/Metrics';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: ${Spaces.BaseMargin} 0;
  padding: 0 calc(${Spaces.BasePadding} * 3);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  ${Breakpoints.xl} {
    max-width: 1200px;
  }
`;
export const Logo = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.TextColor.Light};
  font-size: ${Fonts.sizes.Logo};
  font-weight: bold;

  img {
    height: 50px;
    margin-right: ${Spaces.BaseMargin};
  }
`;
export const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;
export const NavItem = styled.li`
  margin: 0 ${Spaces.BaseMargin};
  a {
    color: ${Colors.TextColor.Light};
    text-transform: uppercase;
    font-size: ${Fonts.sizes.Small};
    &:hover {
      border-bottom: 1px solid ${Colors.TextColor.Light};
    }
    &.button {
      border: 1px solid ${Colors.TextColor.Light};
      border-radius: 30px;
      padding: ${Spaces.BasePadding} calc(${Spaces.BasePadding} * 2);
      &:hover {
        background: ${Colors.TextColor.Highlighted};
        border-color: ${Colors.TextColor.Dark};
      }
    }
  }
`;
