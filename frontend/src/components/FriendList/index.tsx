import { AiOutlineMessage } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';

import avatarImg from '../../assets/img/avatar.jpg';

import {
  FriendListContainer,
  FriendListContent,
  FriendListCountry,
  FriendListHeader,
  FriendListName,
  FriendListProfile,
  FriendListSearch
} from './styles';

export function FriendList() {
  return (
    <FriendListContainer>
      <FriendListHeader>
        <h2>Friend List</h2>
        <span>See all</span>
      </FriendListHeader>

      <FriendListSearch>
        <button>
          <MdSearch size={24} className="icon-search" />
        </button>
        <input type="search" placeholder="Search a Friend" />
      </FriendListSearch>

      <div className="friendListWrapper">
        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>

        <FriendListContent>
          <FriendListProfile>
            <div className="avatarFriend">
              <img src={avatarImg} alt="Profile photo from a birthday friend" />
            </div>
            <FriendListName>
              <h4>Vitor, 21</h4>
              <FriendListCountry>
                <img
                  src="https://www.countryflagicons.com/FLAT/24/BR.png"
                  alt="Brazil"
                  className="flag"
                />
                <span>Brazil</span>
              </FriendListCountry>
            </FriendListName>
          </FriendListProfile>
          <AiOutlineMessage size={24} className="icon-message" />
        </FriendListContent>
      </div>
    </FriendListContainer>
  );
}
