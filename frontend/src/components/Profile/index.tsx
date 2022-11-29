import avatarImg from '../../assets/img/avatar.jpg';
import bannerImg from '../../assets/img/banner.jpg';

import { AiOutlineEdit } from 'react-icons/ai';

import { MenuBar } from '../MenuBar';
import {
  BannerProfile,
  HeaderProfile,
  InformationProfile,
  LocationProfile,
  PhotoProfile,
  ProfileContainer,
  ProfileContent,
  StatusProfile
} from './styles';

export function Profile() {
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
          <p>vitor97, 25 y.o. </p>
          <LocationProfile>
            <span>Rio de Janeiro, Brazil</span>
            <img
              src="https://www.countryflagicons.com/FLAT/24/BR.png"
              alt="Brazil"
            />
          </LocationProfile>

          <strong>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, beatae magni nobis veritatis aliquam, pariatur
            temporibus quae sequi eaque at, cum odit. Explicabo corporis ipsa
            reiciendis in esse, quas placeat!
          </strong>
        </InformationProfile>
        <button>
          <AiOutlineEdit size={24} />
          Edit your Profile
        </button>

        <hr />
      </ProfileContent>
      <MenuBar />
    </ProfileContainer>
  );
}
