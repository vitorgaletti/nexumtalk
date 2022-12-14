import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-between;

  @media (min-width: ${device['mobile']}) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: ${device['tablet']}) {
    grid-template-columns: minmax(438px, auto) minmax(250px, auto);
    gap: 1rem;
  }

  @media (min-width: ${device['desktop']}) {
    grid-template-columns: minmax(237px, 313px) minmax(400px, 736px) minmax(
        auto,
        297px
      );
  }
`;
