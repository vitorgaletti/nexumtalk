import { AiOutlineMessage } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';

import avatarImg from '../../../../assets/img/avatar.jpg';

import {
  FriendListContainer,
  FriendListContent,
  FriendListHeader,
  FriendListItem,
  FriendListProfile,
  FriendListProfileAvatar,
  FriendListProfileCountry,
  FriendListProfileWrapper,
  FriendListSearch
} from './styles';

export function FriendList() {
  const isOnline = true;

  return (
    <FriendListContainer>
      <FriendListHeader>
        <h2>Friend List</h2>
        <span>See all</span>
      </FriendListHeader>

      <FriendListSearch>
        <button>
          <MdSearch size={24} className="friend-list-search--icon-search" />
        </button>
        <input type="search" placeholder="Search a Friend" />
      </FriendListSearch>

      <FriendListContent>
        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>

        <FriendListItem>
          <FriendListProfile>
            <FriendListProfileAvatar isOnline={isOnline}>
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </FriendListProfileAvatar>
            <FriendListProfileWrapper>
              <h4>Vitor, 21</h4>
              <FriendListProfileCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                />
                <span>Brazil</span>
              </FriendListProfileCountry>
            </FriendListProfileWrapper>
          </FriendListProfile>
          <AiOutlineMessage
            size={24}
            className="friend-list-content-item__icon-message"
          />
        </FriendListItem>
      </FriendListContent>
    </FriendListContainer>
  );
}
