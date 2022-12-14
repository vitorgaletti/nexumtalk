import styled from 'styled-components';

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme.colors['white']};
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  span {
    font-size: ${props => props.theme.fontSize['base']};
    color: ${props => props.theme.colors['zinc-800']};
    font-weight: 700;
  }

  p {
    font-size: ${props => props.theme.fontSize['base']};
    color: ${props => props.theme.colors['zinc-600']};
    word-break: break-word;
  }

  .information__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .information-container__separator {
    margin: 0;
  }
`;
