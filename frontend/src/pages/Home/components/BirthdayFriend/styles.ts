import styled from 'styled-components';
import { device } from '../../../../styles/themes/default';

interface BirthdayFriendProps {
  anyBirthdays?: boolean;
}

export const BirthdayFriendContainer = styled.div<BirthdayFriendProps>`
  width: 100%;
  height: auto;
  padding: 2rem;

  flex-direction: column;
  gap: 1.5rem;
  background-color: white;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: ${device['mobile']}) {
    display: none;
  }

  @media (min-width: ${device['tablet']}) {
    display: ${props => (props.anyBirthdays ? 'flex' : 'none')};
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

export const BirthdayFriendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BirthdayFriendProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .birthday-friend-profile__avatar-friend {
    max-width: 3.625rem;
    height: 3.625rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      clip-path: circle();
    }
  }
`;

export const BirthdayFriendProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;

  h4 {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
  }
`;

export const BirthdayFriendCountry = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-800']};
  }
`;
