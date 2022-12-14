import { MdSearch } from 'react-icons/md';
import avatarImg from '../../../../assets/img/avatar.jpg';

import {
  FriendProfileCountry,
  FriendProfileItem,
  FriendProfileItemAvatar,
  FriendProfileItemContent,
  FriendsContainer,
  FriendSearch
} from './styles';
export function Friends() {
  const isOnline = true;

  return (
    <FriendsContainer>
      <FriendSearch>
        <div className="friend-search__field">
          <button>
            <MdSearch size={24} />
          </button>
          <input type="search" placeholder="Search your friends list" />
        </div>
        <hr />
      </FriendSearch>

      <FriendProfileItem>
        <FriendProfileItemAvatar isOnline={isOnline}>
          <img src={avatarImg} alt="Avatar profile" />
        </FriendProfileItemAvatar>

        <FriendProfileItemContent>
          <p>
            Vitor{' '}
            <span className="friend-profile-item-content--separator">|</span>{' '}
            <span className="friend-profile-item-content__nickname">
              vitor97, 25 y.o.
            </span>
          </p>
          <FriendProfileCountry>
            <span>Rio de Janeiro, Brazil</span>
            <img
              src="https://www.countryflagicons.com/FLAT/24/BR.png"
              alt="Brazil"
            />
          </FriendProfileCountry>
        </FriendProfileItemContent>
      </FriendProfileItem>
      <hr />

      <FriendProfileItem>
        <FriendProfileItemAvatar isOnline={false}>
          <img src={avatarImg} alt="Avatar profile" />
        </FriendProfileItemAvatar>

        <FriendProfileItemContent>
          <p>
            Vitor{' '}
            <span className="friend-profile-item-content--separator">|</span>{' '}
            <span className="friend-profile-item-content__nickname">
              vitor97, 25 y.o.
            </span>
          </p>
          <FriendProfileCountry>
            <span>Rio de Janeiro, Brazil</span>
            <img
              src="https://www.countryflagicons.com/FLAT/24/BR.png"
              alt="Brazil"
            />
          </FriendProfileCountry>
        </FriendProfileItemContent>
      </FriendProfileItem>
      <hr />

      <FriendProfileItem>
        <FriendProfileItemAvatar isOnline={isOnline}>
          <img src={avatarImg} alt="Avatar profile" />
        </FriendProfileItemAvatar>

        <FriendProfileItemContent>
          <p>
            Vitor{' '}
            <span className="friend-profile-item-content--separator">|</span>{' '}
            <span className="friend-profile-item-content__nickname">
              vitor97, 25 y.o.
            </span>
          </p>
          <FriendProfileCountry>
            <span>Rio de Janeiro, Brazil</span>
            <img
              src="https://www.countryflagicons.com/FLAT/24/BR.png"
              alt="Brazil"
            />
          </FriendProfileCountry>
        </FriendProfileItemContent>
      </FriendProfileItem>
      <hr />
    </FriendsContainer>
  );
}
