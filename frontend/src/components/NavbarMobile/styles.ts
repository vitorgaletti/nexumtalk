/* eslint-disable indent */
import styled from 'styled-components';

interface NavbarMobileContentProps {
  hasSubPagesHome: boolean;
  hasSubPagesMyProfile: boolean;
}

export const NavbarMobileContainer = styled.div`
  max-width: calc(100vw - 30%);
  width: 100%;
  height: 30rem;
  padding: 1rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 4px;
  animation: delayShow 2s cubic-bezier(0.16, 1, 0.3, 1);

  a {
    img {
      max-width: 1.5rem;
      width: 100%;
      height: auto;
    }

    h1 {
      font-size: ${props => props.theme.fontSize['xl']};
      color: ${props => props.theme.colors['sky-500']};
    }

    button {
      border: none;
      outline: none;
      background-color: transparent;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }

  @keyframes delayShow {
    from {
      transform: translateX(-80%);
    }
    to {
      transform: translateX(0%);
    }
  }

  hr {
    height: 1px;
    border: 0;
    margin-top: 1rem;
    background-color: ${props => props.theme.colors['gray-300']};
  }
`;

export const NavbarMobileContent = styled.nav<NavbarMobileContentProps>`
  width: 100%;
  margin-top: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    justify-content: space-between;
    list-style: none;

    a {
      &.active {
        button {
          color: ${props => props.theme.colors['sky-500']};
        }
      }

      &.activeLinkHome {
        button {
          color: ${props =>
            props.hasSubPagesHome
              ? props.theme.colors['zinc-800']
              : props.theme.colors['sky-500']};
        }
      }

      &.activeLinkMyProfile {
        button {
          color: ${props =>
            props.hasSubPagesMyProfile
              ? props.theme.colors['sky-500']
              : props.theme.colors['zinc-800']};
        }
      }

      button {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
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

        .last-visitors--icon path {
          stroke: ${props => props.theme.colors['sky-500']};
        }

        svg {
          color: ${props => props.theme.colors['sky-500']};
          font-size: ${props => props.theme.fontSize['xl']};
        }
      }
    }
  }
`;
