import { AiOutlineMessage } from 'react-icons/ai';

import avatarImg from '../../../../assets/img/avatar.jpg';

import {
  BirthdayFriendContainer,
  BirthdayFriendCountry,
  BirthdayFriendHeader,
  BirthdayFriendItem,
  BirthdayFriendProfile,
  BirthdayFriendProfileContent
} from './styles';

export function BirthdayFriend() {
  const birthday = true;
  return (
    <BirthdayFriendContainer anyBirthdays={birthday}>
      <BirthdayFriendHeader>
        <h2>Birthday</h2>
        <span>See all</span>
      </BirthdayFriendHeader>

      <BirthdayFriendItem>
        <BirthdayFriendProfile>
          <div className="birthday-friend-profile__avatar-friend">
            <img src={avatarImg} alt="Profile photo from a birthday friend" />
          </div>
          <BirthdayFriendProfileContent>
            <h4>Vitor, 21</h4>
            <BirthdayFriendCountry>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
              />
              <span>Brazil</span>
            </BirthdayFriendCountry>
          </BirthdayFriendProfileContent>
        </BirthdayFriendProfile>
        <AiOutlineMessage
          size={24}
          className="birthday-friend-content--icon-message"
        />
      </BirthdayFriendItem>
    </BirthdayFriendContainer>
  );
}
