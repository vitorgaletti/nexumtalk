import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const NewPost = styled.div`
  width: 100%;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  border-radius: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;

  @media (min-width: ${device['desktop']}) {
    padding: 1rem 2.5rem;
  }

  img {
    max-width: 3rem;
    width: 100%;
    height: auto;
    clip-path: circle();
  }

  strong {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['zinc-600']};

    @media (min-width: ${device['tablet']}) {
      font-size: ${props => props.theme.fontSize['base']};
    }
  }
`;
