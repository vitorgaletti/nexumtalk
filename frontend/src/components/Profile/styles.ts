import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const ProfileContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
  position: sticky;
  top: calc(0vh - 440px);

  @media (min-width: ${device['mobile']}) {
    display: none;
  }

  @media (min-width: ${device['tablet']}) {
    display: block;
  }

  @media (min-width: ${device['desktop']}) {
    top: calc(0vh - 480px);
  }

  @media (min-width: ${device['desktopLarge']}) {
    top: calc(0vh - 440px);
  }
`;

export const HeaderProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BannerProfile = styled.div`
  max-width: 250px;
  width: 100%;
  height: 150px;
  position: relative;

  @media (min-width: ${device['desktop']}) {
    max-width: 313px;
  }

  img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const PhotoProfile = styled.div`
  max-width: 150px;
  height: 100px;
  position: absolute;
  top: 11%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

export const ProfileContent = styled.div`
  margin-top: 4.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-size: ${props => props.theme.fontSize['sm']};
  color: ${props => props.theme.colors['zinc-600']};

  button {
    padding: 0.75rem 1rem;
    border: 1px solid ${props => props.theme.colors['sky-500']};
    background-color: white;
    border-radius: 8px;
    color: ${props => props.theme.colors['sky-500']};
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    outline-color: ${props => props.theme.colors['sky-500']};
    transition: all 1.2s;

    &:hover {
      color: white;
      background-color: ${props => props.theme.colors['sky-500']};
    }

    @media (min-width: ${device['desktop']}) {
      font-size: ${props => props.theme.fontSize['base']};
    }
  }

  hr {
    max-width: 220px;
    width: 100%;
    border: 1px solid ${props => props.theme.colors['gray-300']};

    @media (min-width: ${device['desktop']}) {
      max-width: 281px;
    }
  }
`;

export const InformationProfile = styled.div`
  max-width: fit-content;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${props => props.theme.colors['zinc-600']};
    color: ${props => props.theme.fontSize['sm']};
  }

  strong {
    color: ${props => props.theme.colors['zinc-600']};
    font-size: ${props => props.theme.fontSize['xs']};
    text-align: center;
    font-weight: 700;

    &::before {
      content: '"';
    }

    &::after {
      content: '."';
    }

    @media (min-width: ${device['desktop']}) {
      font-size: ${props => props.theme.fontSize['sm']};
    }
  }
`;

export const StatusProfile = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    width: 0.75rem;
    height: 0.75rem;
    background-color: ${props => props.theme.colors['green-500']};
    border-radius: 50%;
  }

  h4 {
    font-size: ${props => props.theme.fontSize['base']};
    font-weight: 600;
    color: ${props => props.theme.colors['zinc-800']};
  }
`;

export const LocationProfile = styled.div`
  width: fit-content;
  display: flex;
  gap: 8px;
  align-items: center;
  text-align: center;

  span {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-600']};
  }

  img {
    max-width: 1.5rem;
    width: 100%;
    height: 100%;
  }
`;
