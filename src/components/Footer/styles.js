import styled from 'styled-components';

import { Colors, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.TextColor.Dark};
  color: ${Colors.White};
  padding: ${Spaces.BasePadding};
  a {
    color: ${Colors.TextColor.Highlighted};
    &:hover {
      color: ${Colors.Backgrounds.Destaque};
      text-decoration: underline;
    }
  }
`;
