import styled from 'styled-components';
import { device } from '../../../../styles/themes/default';
interface FriendListProfileAvatarProps {
  isOnline?: boolean;
}

export const FriendListContainer = styled.div`
  width: 100%;
  max-height: 85vh;
  height: min-content;

  padding: 2rem 1rem;
  flex-direction: column;
  gap: 1.5rem;

  background-color: white;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: sticky;
  top: 6.25rem;

  @media (min-width: ${device['mobile']}) {
    display: none;
  }

  @media (min-width: ${device['tablet']}) {
    display: flex;
  }
`;

export const FriendListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSize['base']};
  font-weight: 700;

  h2 {
    font-size: ${props => props.theme.fontSize['base']};
    font-weight: 700;
  }

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['sky-500']};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const FriendListSearch = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  border-radius: 8px;

  &:focus-within {
    border: 1px solid ${props => props.theme.colors['sky-500']};
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    outline: none;
    background-color: transparent;
  }

  input[type='search'] {
    width: 100%;
    border: none;
    outline: none;
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
    font-weight: 600;

    &::placeholder {
      font-size: ${props => props.theme.fontSize['sm']};
      color: ${props => props.theme.colors['zinc-800']};
      font-weight: 400;
    }
  }

  .friend-list-search--icon-search {
    color: ${props => props.theme.colors['sky-500']};
  }
`;

export const FriendListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  overflow: auto;
  background-color: white;

  scrollbar-color: ${props => props.theme.colors['gray-300']}
    // eslint-disable-next-line indent
    ${props => props.theme.colors['zinc-100']};
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    background-color: ${props => props.theme.colors['zinc-100']};
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${props => props.theme.colors['zinc-100']};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${props => props.theme.colors['gray-300']};
    -webkit-border-radius: 1em;
  }
`;

export const FriendListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .friend-list-content-item__icon-message {
    color: ${props => props.theme.colors['sky-500']};
    margin-right: 0.75rem;
  }
`;

export const FriendListProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FriendListProfileAvatar = styled.div<FriendListProfileAvatarProps>`
  max-width: 3.625rem;
  height: 3.625rem;
  border: ${props =>
    props.isOnline ? `3px solid ${props.theme.colors['green-500']}` : 'none'};
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    clip-path: circle();
  }
`;

export const FriendListProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;

  h4 {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
  }
`;

export const FriendListProfileCountry = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
  }
`;
