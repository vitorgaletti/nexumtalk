/* eslint-disable indent */
import styled from 'styled-components';

interface NavbarContainerProps {
  hasSubPagesMyProfile: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  width: 100%;
  margin-top: 0;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
      font-size: ${props => props.theme.fontSize['base']};
      font-weight: 700;
      color: ${props => props.theme.colors['zinc-800']};
      transition: color 0.2s;

      span {
        display: none;
      }

      &:hover {
        color: ${props => props.theme.colors['sky-500']};
      }

      &:focus-within {
        outline-color: ${props => props.theme.colors['sky-500']};
      }

      &.active {
        svg {
          color: ${props => props.theme.colors['white']};
        }
      }

      &.activeLinkMyProfile.active {
        svg {
          color: ${props =>
            props.hasSubPagesMyProfile
              ? props.theme.colors['white']
              : props.theme.colors['gray-300']};
        }
      }

      .last-visitors--icon path {
        stroke: ${props => props.theme.colors['gray-300']};

        &:hover {
          stroke: ${props => props.theme.colors['white']};
        }
      }

      svg {
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
`;
