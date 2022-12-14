/* eslint-disable indent */
import styled from 'styled-components';

export const UserContainer = styled.div`
  width: 100%;
  height: 100%;

  hr {
    width: 100%;
    border: 1px solid ${props => props.theme.colors['gray-300']};
    margin: 2rem 0;
  }
`;

export const UserContainerTop = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const UserCard = styled.div`
  margin-top: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const UserCardProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  img {
    max-width: 19rem;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h4 {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['sky-500']};
    font-weight: 700;

    span {
      color: ${props => props.theme.colors['gray-300']};
    }

    .user-card__name {
      font-size: ${props => props.theme.fontSize['xs']};
      color: ${props => props.theme.colors['zinc-600']};
      font-weight: 400;
    }
  }

  .user_card__location {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      font-size: ${props => props.theme.fontSize['sm']};
      color: ${props => props.theme.colors['zinc-600']};
    }

    img {
      max-width: 1.5rem;
      width: 100%;
      height: auto;
    }
  }
`;

export const UserStatus = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  .status {
    width: 0.75rem;
    height: 0.75rem;
    background-color: ${props => props.theme.colors['green-500']};
    border-radius: 50%;
  }

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['green-500']};
  }
`;

export const UserCardProfileButton = styled.button`
  padding: 0.75rem 1rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: ${props => props.theme.colors['sky-500']};
  border-radius: 8px;

  color: ${props => props.theme.colors['white']};

  font-size: ${props => props.theme.fontSize['sm']};
  font-weight: 700;

  transition: all 0.3s ease-in-out;

  svg {
    font-size: ${props => props.theme.fontSize['xl']};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

interface UserMenuProps {
  hasSubPages: boolean;
}

export const UserMenu = styled.div<UserMenuProps>`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  background-color: ${props => props.theme.colors['white']};

  border-radius: 8px;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    a {
      font-size: ${props => props.theme.fontSize['base']};
      font-weight: 700;
      color: ${props => props.theme.colors['gray-300']};

      &.active {
        color: ${props => props.theme.colors['sky-500']};
      }

      &.activeLinkPosts {
        color: ${props =>
          props.hasSubPages
            ? props.theme.colors['gray-300']
            : props.theme.colors['sky-500']};
      }
    }
  }
`;
