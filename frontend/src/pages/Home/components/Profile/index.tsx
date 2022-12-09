import { getCode } from 'country-list';
import { useState } from 'react';
import avatarImg from '../../../../assets/img/avatar.jpg';
import bannerImg from '../../../../assets/img/banner.jpg';
import { ProfileLanguages } from '../../../../components/ProfileLanguages';

import {
  BannerProfile,
  HeaderProfile,
  InformationProfile,
  LocationProfile,
  PhotoProfile,
  PhotosGallery,
  ProfileContainer,
  ProfileContent,
  StatusProfile
} from './styles';

interface GenderProfileProps {
  gender: 'male' | 'female';
}

export function Profile() {
  const codeCountry = getCode('Brazil');
  const [genderProfile, setGenderProfile] =
    useState<GenderProfileProps['gender']>('male');

  console.log(genderProfile);
  return (
    <ProfileContainer>
      <HeaderProfile>
        <BannerProfile>
          <img src={bannerImg} alt="Banner" />
        </BannerProfile>
        <PhotoProfile>
          <img src={avatarImg} alt="Photo Profile" />
        </PhotoProfile>
      </HeaderProfile>

      <ProfileContent>
        <InformationProfile>
          <StatusProfile>
            <span></span>
            <h4>Vitor</h4>
          </StatusProfile>

          <div className="information-profile__details">
            <p>vitor97, 25 y.o. </p>
            <img
              src={`${
                genderProfile === 'male'
                  ? 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/boy_1f466.png'
                  : 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/girl_1f467.png'
              }`}
              alt=""
            />
          </div>

          <span className="information-profile__join-date">
            Joined 10 years ago, profile updated 10 years ago
          </span>
          <LocationProfile>
            <span>Rio de Janeiro, Brazil</span>
            <img
              src={`https://www.countryflagicons.com/FLAT/24/${codeCountry}.png`}
              alt="Brazil"
            />
          </LocationProfile>
        </InformationProfile>

        <hr />
        <PhotosGallery>
          <div className="photos-gallery__header">
            <h2>Photos Gallery</h2>
            <span>See all</span>
          </div>
          <div className="photos-gallery__images">
            <img src={avatarImg} alt="Photo Profile" />
            <img src={avatarImg} alt="Photo Profile" />
            <img src={avatarImg} alt="Photo Profile" />
          </div>
        </PhotosGallery>

        <hr />

        <ProfileLanguages title="Speaks" />

        <hr />

        <ProfileLanguages title="Learning" />
      </ProfileContent>
    </ProfileContainer>
  );
}
