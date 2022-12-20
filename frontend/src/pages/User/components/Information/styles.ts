import styled from 'styled-components';
import { device } from '../../../../styles/themes/default';

export const InformationContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme.colors['white']};
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (min-width: ${device['tablet']}) {
    padding: 2rem;
  }

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
    font-weight: 700;

    @media (min-width: ${device['tablet']}) {
      font-size: ${props => props.theme.fontSize['base']};
    }
  }

  p {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-600']};
    word-break: break-word;

    @media (min-width: ${device['tablet']}) {
      font-size: ${props => props.theme.fontSize['base']};
    }
  }

  .information__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: ${device['tablet']}) {
      gap: 1.5rem;
    }
  }

  .information-container__separator {
    margin: 0;
  }
`;
