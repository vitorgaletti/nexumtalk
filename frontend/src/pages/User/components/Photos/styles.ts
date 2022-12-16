import styled from 'styled-components';
import { device } from '../../../../styles/themes/default';

export const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  padding: 1rem;
  align-items: flex-end;
  background-color: ${props => props.theme.colors['white']};
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (min-width: ${device['tablet']}) {
    padding: 2rem 1rem;
    gap: 2rem;
  }

  button {
    width: fit-content;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.theme.colors['sky-500']};
    color: ${props => props.theme.colors['white']};
    border: none;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;

    @media (min-width: ${device['tablet']}) {
      padding: 0.75rem 1.5rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const PhotosGallery = styled.div`
  max-width: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 0.625rem;

  @media (min-width: ${device['tablet']}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;
