import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const MenuContainer = styled.nav`
  width: 100%;
  padding: 0;
  margin-top: 3rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;

    a {
      width: max-content;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 700;
      color: ${props => props.theme.colors['zinc-800']};
      transition: color 0.2s;

      &:hover {
        color: ${props => props.theme.colors['sky-500']};
      }

      &:focus-within {
        outline-color: ${props => props.theme.colors['sky-500']};
      }

      .icon path {
        stroke: ${props => props.theme.colors['sky-500']};
      }

      svg {
        color: ${props => props.theme.colors['sky-500']};
        font-size: ${props => props.theme.fontSize['xl']};

        @media (min-width: ${device['tablet']}) {
          font-size: ${props => props.theme.fontSize['2xl']};
        }
      }

      @media (min-width: ${device['tablet']}) {
        font-size: ${props => props.theme.fontSize['base']};
      }
    }
  }

  @media (min-width: ${device['tablet']}) {
    padding: 1.5rem 0 2rem 1rem;
    margin: 0;
  }
`;
