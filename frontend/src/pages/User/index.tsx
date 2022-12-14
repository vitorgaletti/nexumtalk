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
export function User() {
  const { nickname } = useParams();
  const { pathname } = useLocation();
  const hasSubPages = pathname.includes(`${nickname}/`);

  return (
    <UserContainer>
      <UserContainerTop>
        <img src={bannerImg} alt="Profile Banner" />
        <UserCard>
          <UserCardProfile>
            <img src={avatarImg} alt="Avatar" />
            <UserStatus>
              <div className="status"></div>
              <span>Online</span>
            </UserStatus>
            <h4>
              Vitor <span>|</span>{' '}
              <span className="user-card__name"> vitor97, 25 y.o.</span>
            </h4>
            <div className="user_card__location">
              <span>Rio de Janeiro</span>
              <img
                src={'https://www.countryflagicons.com/FLAT/24/BR.png'}
                alt="Brazil"
              />
            </div>

            <UserCardProfileButton>
              <FiEdit />
              Edit your profile
            </UserCardProfileButton>
          </UserCardProfile>
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
