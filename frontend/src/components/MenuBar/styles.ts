import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const MenuContainer = styled.nav`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: ${device['tablet']}) {
    margin-top: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    justify-content: space-between;
    list-style: none;

    @media (min-width: ${device['tablet']}) {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 700;
      color: ${props => props.theme.colors['zinc-800']};
      transition: color 0.2s;

      @media (min-width: ${device['tablet']}) {
        flex-direction: column;
        font-size: ${props => props.theme.fontSize['base']};

        span {
          display: none;
        }
      }

      &:hover {
        color: ${props => props.theme.colors['sky-500']};
      }

      &:focus-within {
        outline-color: ${props => props.theme.colors['sky-500']};
      }

      &.active {
        color: ${props => props.theme.colors['sky-500']};
        svg {
          @media (min-width: ${device['tablet']}) {
            color: ${props => props.theme.colors['white']};
          }
        }
      }

      .last-visitors--icon path {
        stroke: ${props => props.theme.colors['sky-500']};

        @media (min-width: ${device['tablet']}) {
          stroke: ${props => props.theme.colors['gray-300']};

          &:hover {
            stroke: ${props => props.theme.colors['white']};
          }
        }
      }

      svg {
        color: ${props => props.theme.colors['sky-500']};
        font-size: ${props => props.theme.fontSize['xl']};

        @media (min-width: ${device['tablet']}) {
          color: ${props => props.theme.colors['gray-300']};
          font-size: ${props => props.theme.fontSize['2xl']};
          transition: transform 0.3s ease-in-out;

          &:hover {
            color: ${props => props.theme.colors['white']};
            transform: scale(1.2);
          }
        }
      }
    }
  }
`;
