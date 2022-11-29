import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const BirthdayFriendContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;

  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  background-color: white;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: ${device['mobile']}) {
    display: none;
  }

  @media (min-width: ${device['desktop']}) {
    display: flex;
  }
`;

export const BirthdayFriendHeader = styled.div`
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

export const BirthdayFriendContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon-message {
    color: ${props => props.theme.colors['sky-500']};
  }
`;

export const BirthdayFriendProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .avatarFriend {
    max-width: 3.625rem;
    height: 3.625rem;
    border: 3px solid ${props => props.theme.colors['green-500']};
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      clip-path: circle();
    }
  }
`;

export const BirthdayFriendName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  h4 {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
  }
`;

export const BirthdayFriendCountry = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .flag {
    max-width: 1.5rem;
    width: 100%;
    height: 100%;
    clip-path: none;
  }

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
  }
`;
