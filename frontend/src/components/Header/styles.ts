import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const ContainerHeader = styled.header`
  width: 100%;
  background-color: ${props => props.theme.colors['sky-500']};
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (min-width: ${device['tablet']}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: stretch;
    align-items: center;
    padding: 1rem 2rem;
  }

  button {
    border: 0;
    outline: none;
    background-color: transparent;
  }

  .menu-desktop {
    display: none;

    @media (min-width: ${device['tablet']}) {
      display: block;
    }
  }
`;

export const LogoContent = styled.div`
  button {
    @media (min-width: ${device['tablet']}) {
      display: none;
    }
  }

  .navlink__logo {
    width: min-content;
    width: -moz-fit-content;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;

    img {
      width: 100%;
      height: auto;

      @media (min-width: ${device['mobile']}) {
        display: none;
      }

      @media (min-width: ${device['tablet']}) {
        max-width: 2.625rem;
        display: block;
      }

      @media (min-width: ${device['desktop']}) {
        max-width: 3rem;
      }
    }

    h1 {
      color: white;

      @media (min-width: ${device['mobile']}) {
        display: none;
      }

      @media (min-width: ${device['tablet']}) {
        font-size: ${props => props.theme.fontSize['xl']};
        display: block;
      }

      @media (min-width: ${device['desktop']}) {
        font-size: ${props => props.theme.fontSize['2xl']};
      }
    }
  }

  .menu-hamburguer {
    @media (min-width: ${device['mobile']}) {
      display: block;
    }

    @media (min-width: ${device['tablet']}) {
      display: none;
    }
  }
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex: 1;

  h4 {
    color: white;

    @media (min-width: ${device['mobile']}) {
      display: none;
    }

    @media (min-width: ${device['tablet']}) {
      display: block;
      font-size: ${props => props.theme.fontSize['base']};
    }

    @media (min-width: ${device['desktop']}) {
      font-size: ${props => props.theme.fontSize['lg']};
    }
  }

  img {
    max-width: 3rem;
    width: 100%;
    height: auto;
    clip-path: circle();
  }

  .icon-notification {
    color: ${props => props.theme.colors['red-500']};

    @media (min-width: ${device['mobile']}) {
      display: none;
    }

    @media (min-width: ${device['tablet']}) {
      display: block;
    }
  }

  .DropdownMenuAvatar {
    display: flex;
    align-items: center;
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 200px;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .DropdownMenuArrow {
    fill: white;
  }

  .DropdownMenuSeparator {
    height: 1px;
    background-color: ${props => props.theme.colors['gray-300']};
    margin: 5px 0;
  }

  .DropwdowMenuItem {
    outline-color: ${props => props.theme.colors['sky-500']};
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme.colors['zinc-800']};
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 700;

      svg {
        color: ${props => props.theme.colors['sky-500']};
        font-size: ${props => props.theme.fontSize['xl']};
      }

      &:hover {
        color: ${props => props.theme.colors['sky-500']};
      }

      @media (min-width: ${device['desktop']}) {
        font-size: ${props => props.theme.fontSize['base']};
      }
    }

    &:hover {
      outline: none;
    }

    &:last-child {
      a {
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(0.9);
          color: ${props => props.theme.colors['red-500']};
        }
        svg {
          color: ${props => props.theme.colors['red-500']};
        }
      }
    }
  }
`;
