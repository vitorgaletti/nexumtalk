import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media (min-width: ${device['tablet']}) {
    padding: 1rem 2rem 3rem;
  }
`;
