import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import avatarImg from '../../assets/img/avatar.jpg';
import bannerImg from '../../assets/img/banner.jpg';
import { Feed } from '../../components/Feed';
import { About } from './components/About';
import { Friends } from './components/Friends';
import { Information } from './components/Information';
import { Photos } from './components/Photos';
import {
  UserCard,
  UserCardProfile,
  UserCardProfileButton,
  UserContainer,
  UserContainerTop,
  UserMenu,
  UserStatus
} from './styles';

interface UserProps {
  gender: 'male' | 'female';
}
export function User() {
  const { nickname } = useParams();
  const { pathname } = useLocation();
  const hasSubPages = pathname.includes(`${nickname}/`);

  const [genderProfile, setGenderProfile] =
    useState<UserProps['gender']>('male');

  return (
    <UserContainer>
      <UserContainerTop>
        <img
          src={bannerImg}
          alt="Profile Banner"
          className="user-container-top__banner"
        />
        <UserCard>
          <UserCardProfile>
            <img src={avatarImg} alt="Avatar" />
            <UserStatus>
              <div className="status"></div>
              <span>Online</span>
            </UserStatus>

            <div className="user-card-profile__details">
              <h4>
                Vitor <span>|</span>{' '}
                <span className="user-card__name"> vitor97, 25 y.o.</span>
              </h4>
              <img
                src={`${
                  genderProfile === 'male'
                    ? 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/boy_1f466.png'
                    : 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/girl_1f467.png'
                }`}
                alt=""
              />
            </div>
            <div className="user_card__location">
              <span>Rio de Janeiro</span>
              <img
                src={'https://www.countryflagicons.com/FLAT/24/BR.png'}
                alt="Brazil"
              />
            </div>
          </UserCardProfile>
          <UserCardProfileButton>
            <FiEdit />
            Edit your profile
          </UserCardProfileButton>
        </UserCard>
      </UserContainerTop>

      <hr />

      <UserMenu hasSubPages={hasSubPages}>
        <ul>
          <li>
            <NavLink to={`/${nickname}`} className="activeLinkPosts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${nickname}/about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/${nickname}/information`}>Information</NavLink>
          </li>
          <li>
            <NavLink to={`/${nickname}/photos`}>Photos</NavLink>
          </li>
          <li>
            <NavLink to={`/${nickname}/friends`}>Friends</NavLink>
          </li>
        </ul>
      </UserMenu>

      {!hasSubPages && <Feed />}
      {pathname.includes('about') && <About />}
      {pathname.includes('information') && <Information />}
      {pathname.includes('photos') && <Photos />}
      {pathname.includes('friends') && <Friends />}
    </UserContainer>
  );
}
