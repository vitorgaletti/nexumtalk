import { AiOutlineMessage } from 'react-icons/ai';

import avatarImg from '../../assets/img/avatar.jpg';

import {
  BirthdayFriendContainer,
  BirthdayFriendContent,
  BirthdayFriendCountry,
  BirthdayFriendHeader,
  BirthdayFriendName,
  BirthdayFriendProfile
} from './styles';

export function BirthdayFriend() {
  return (
    <BirthdayFriendContainer>
      <BirthdayFriendHeader>
        <h2>Birthday</h2>
        <span>See all</span>
      </BirthdayFriendHeader>

      <BirthdayFriendContent>
        <BirthdayFriendProfile>
          <div className="avatarFriend">
            <img src={avatarImg} alt="Profile photo from a birthday friend" />
          </div>
          <BirthdayFriendName>
            <h4>Vitor, 21</h4>
            <BirthdayFriendCountry>
              <img
                src="https://countryflagsapi.com/svg/brazil"
                alt="Brazil"
                className="flag"
              />
              <span>Brazil</span>
            </BirthdayFriendCountry>
          </BirthdayFriendName>
        </BirthdayFriendProfile>
        <AiOutlineMessage size={24} className="icon-message" />
      </BirthdayFriendContent>

      <BirthdayFriendContent>
        <BirthdayFriendProfile>
          <div className="avatarFriend">
            <img src={avatarImg} alt="Profile photo from a birthday friend" />
          </div>
          <BirthdayFriendName>
            <h4>Vitor, 22</h4>
            <BirthdayFriendCountry>
              <img
                src="https://countryflagsapi.com/svg/brazil"
                alt="Brazil"
                className="flag"
              />
              <span>Brazil</span>
            </BirthdayFriendCountry>
          </BirthdayFriendName>
        </BirthdayFriendProfile>
        <AiOutlineMessage size={24} className="icon-message" />
      </BirthdayFriendContent>

      <BirthdayFriendContent>
        <BirthdayFriendProfile>
          <div className="avatarFriend">
            <img src={avatarImg} alt="Profile photo from a birthday friend" />
          </div>
          <BirthdayFriendName>
            <h4>Vitor, 23</h4>
            <BirthdayFriendCountry>
              <img
                src="https://countryflagsapi.com/svg/brazil"
                alt="Brazil"
                className="flag"
              />
              <span>Brazil</span>
            </BirthdayFriendCountry>
          </BirthdayFriendName>
        </BirthdayFriendProfile>
        <AiOutlineMessage size={24} className="icon-message" />
      </BirthdayFriendContent>
    </BirthdayFriendContainer>
  );
}
