import { MdSearch } from 'react-icons/md';
import avatarImg from '../../../../assets/img/avatar.jpg';

import {
  FriendsContainer,
  FriendsProfileCountry,
  FriendsProfileItem,
  FriendsProfileItemAvatar,
  FriendsProfileItemContent,
  FriendsProfiles,
  FriendsSearch
} from './styles';
export function Friends() {
  const isOnline = true;

  return (
    <FriendsContainer>
      <FriendsSearch>
        <div className="friend-search__field">
          <button>
            <MdSearch size={24} />
          </button>
          <input type="search" placeholder="Search your friends list" />
        </div>
        <hr className="friends-search--separator" />
      </FriendsSearch>

      <FriendsProfiles>
        <FriendsProfileItem>
          <FriendsProfileItemAvatar isOnline={isOnline}>
            <img src={avatarImg} alt="Avatar profile" />
          </FriendsProfileItemAvatar>

          <FriendsProfileItemContent>
            <p>
              Vitor{' '}
              <span className="friend-profile-item-content--separator">|</span>{' '}
              <span className="friend-profile-item-content__nickname">
                vitor97, 25 y.o.
              </span>
            </p>
            <FriendsProfileCountry>
              <span>Rio de Janeiro, Brazil</span>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
              />
            </FriendsProfileCountry>
          </FriendsProfileItemContent>
        </FriendsProfileItem>
        <hr className="friends-profiles--separator" />

        <FriendsProfileItem>
          <FriendsProfileItemAvatar isOnline={isOnline}>
            <img src={avatarImg} alt="Avatar profile" />
          </FriendsProfileItemAvatar>

          <FriendsProfileItemContent>
            <p>
              Vitor{' '}
              <span className="friend-profile-item-content--separator">|</span>{' '}
              <span className="friend-profile-item-content__nickname">
                vitor97, 25 y.o.
              </span>
            </p>
            <FriendsProfileCountry>
              <span>Rio de Janeiro, Brazil</span>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
              />
            </FriendsProfileCountry>
          </FriendsProfileItemContent>
        </FriendsProfileItem>
        <hr className="friends-profiles--separator" />

        <FriendsProfileItem>
          <FriendsProfileItemAvatar isOnline={isOnline}>
            <img src={avatarImg} alt="Avatar profile" />
          </FriendsProfileItemAvatar>

          <FriendsProfileItemContent>
            <p>
              Vitor{' '}
              <span className="friend-profile-item-content--separator">|</span>{' '}
              <span className="friend-profile-item-content__nickname">
                vitor97, 25 y.o.
              </span>
            </p>
            <FriendsProfileCountry>
              <span>Rio de Janeiro, Brazil</span>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
              />
            </FriendsProfileCountry>
          </FriendsProfileItemContent>
        </FriendsProfileItem>
        <hr className="friends-profiles--separator" />
      </FriendsProfiles>
    </FriendsContainer>
  );
}
