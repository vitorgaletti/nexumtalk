import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(max-content, 313px) minmax(400px, 736px) minmax(
      auto,
      295px
    );
  gap: 1rem;
  justify-content: center;

  @media (min-width: ${device['mobile']}) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: ${device['tablet']}) {
    grid-template-columns: minmax(250px, auto) minmax(438px, auto);
    gap: 1rem;
  }
`;
