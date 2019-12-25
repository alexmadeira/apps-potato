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
  ${Breakpoints.sm} {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
export const Logo = styled.div`
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
  ${Breakpoints.sm} {
    width: 100%;
  }
`;
export const Hamburguer = styled.div`
  border-top: 3px solid ${Colors.TextColor.Light};
  position: relative;
  width: 20px;
  height: 3px;
  margin-left: auto;
  display: none;
  justify-self: flex-end;
  ${Breakpoints.sm} {
    display: flex;
  }
  &::before {
    content: '';
    width: 100%;
    border-top: 3px solid ${Colors.TextColor.Light};
    position: absolute;
    top: -10px;
  }
  &::after {
    content: '';
    width: 100%;
    border-top: 3px solid ${Colors.TextColor.Light};
    position: absolute;
    bottom: -7px;
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  ${Breakpoints.sm} {
    align-items: flex-end;
    justify-content: center;
    justify-self: flex-end;
    margin-left: auto;
    flex-direction: column;

    display: none;
    &.open {
      display: flex;
    }
  }
`;
export const NavItem = styled.li`
  margin: 0 ${Spaces.BaseMargin};
  ${Breakpoints.sm} {
    margin: calc(${Spaces.BaseMargin} / 3) 0;
  }
  &.button {
    ${Breakpoints.sm} {
      margin: calc(${Spaces.BaseMargin}) 0;
    }
    a {
      border: 1px solid ${Colors.TextColor.Light};
      border-radius: 30px;
      padding: ${Spaces.BasePadding} calc(${Spaces.BasePadding} * 2);

      &:hover {
        background: ${Colors.TextColor.Highlighted};
        border-color: ${Colors.TextColor.Dark};
      }
    }
  }
  a {
    color: ${Colors.TextColor.Light};
    text-transform: uppercase;
    font-size: ${Fonts.sizes.Small};
    &:hover {
      border-bottom: 1px solid ${Colors.TextColor.Light};
    }
  }
`;
