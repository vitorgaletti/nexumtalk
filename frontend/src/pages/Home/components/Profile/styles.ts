import styled from 'styled-components';
import { device } from '../../../../styles/themes/default';

export const ProfileContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
  display: none;
  padding-bottom: 2rem;

  @media (min-width: ${device['tablet']}) {
    display: block;
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
  top: 190px;

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
  gap: 2rem;
  font-size: ${props => props.theme.fontSize['sm']};
  color: ${props => props.theme.colors['zinc-600']};

  hr {
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    border: 1px solid ${props => props.theme.colors['gray-300']};
    margin: 0 1rem;
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

  .information-profile__details {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      color: ${props => props.theme.colors['zinc-600']};
      color: ${props => props.theme.fontSize['sm']};
    }

    img {
      max-width: 2rem;
      width: 100%;
      height: auto;
    }
  }

  .information-profile__join-date {
    font-size: ${props => props.theme.fontSize['xs']};
    color: ${props => props.theme.colors['zinc-600']};
    text-align: center;
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
    font-weight: 700;
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
`;

export const PhotosGallery = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  .photos-gallery__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: ${props => props.theme.fontSize['base']};
      color: ${props => props.theme.colors['zinc-800']};
    }

    span {
      font-size: ${props => props.theme.fontSize['sm']};
      color: ${props => props.theme.colors['sky-500']};
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  .photos-gallery__images {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-between;

    img {
      min-width: 70px;
      width: 100%;
      width: -moz-available;
      width: -webkit-fill-available;
      width: fill-available;
      height: auto;
    }
  }
`;
