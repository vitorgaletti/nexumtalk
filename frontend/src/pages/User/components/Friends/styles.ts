import styled from 'styled-components';

interface FriendProfileItemAvatarProps {
  isOnline: boolean;
}

export const FriendsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0.75rem;
  background-color: ${props => props.theme.colors['white']};
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  hr {
    margin: 0 !important;
  }
`;

export const FriendSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .friend-search__field {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      border: none;
      background-color: transparent;

      svg {
        font-size: ${props => props.theme.fontSize['2xl']};
        color: ${props => props.theme.colors['sky-500']};
      }
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      color: ${props => props.theme.colors['zinc-600']};
      font-weight: 600;

      &::placeholder {
        color: ${props => props.theme.colors['zinc-600']};
        font-size: ${props => props.theme.fontSize['sm']};
        font-weight: 400;
      }
    }
  }
`;

export const FriendProfileItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FriendProfileItemAvatar = styled.div<FriendProfileItemAvatarProps>`
  max-width: 5.625rem;
  height: 5.625rem;
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

export const FriendProfileItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: ${props => props.theme.fontSize['sm']};
    word-break: break-word;
    font-weight: 700;
    color: ${props => props.theme.colors['sky-500']};

    .friend-profile-item-content--separator {
      color: ${props => props.theme.colors['gray-300']};
    }

    .friend-profile-item-content__nickname {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 400;
      color: ${props => props.theme.colors['zinc-600']};
    }
  }
`;

export const FriendProfileCountry = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    font-size: ${props => props.theme.fontSize['xs']};
    color: ${props => props.theme.colors['zinc-600']};
    word-break: break-word;
  }

  img {
    max-width: 1.5rem;
    width: 100%;
    height: auto;
  }
`;
