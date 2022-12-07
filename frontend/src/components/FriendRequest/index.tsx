import avatarImg from '../../assets/img/avatar.jpg';

import {
  FriendRequestButtons,
  FriendRequestContainer,
  FriendRequestCountry,
  FriendRequestHeader,
  FriendRequestItem,
  FriendRequestProfile,
  FriendRequestProfileContent
} from './styles';

export function FriendRequest() {
  const friendRequest = true;
  return (
    <FriendRequestContainer haveFriendRequest={friendRequest}>
      <FriendRequestHeader>
        <h2>Friend Request</h2>
        <span>See all</span>
      </FriendRequestHeader>

      <FriendRequestItem>
        <FriendRequestProfile>
          <div className="friend-request-profile__avatar">
            <img src={avatarImg} alt="Profile photo from a request friend" />
          </div>
          <FriendRequestProfileContent>
            <h4>Vitor</h4>
            <FriendRequestCountry>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
              />
              <span>Brazil</span>
            </FriendRequestCountry>
          </FriendRequestProfileContent>
        </FriendRequestProfile>

        <FriendRequestButtons>
          <button className="friend-request-buttons--confirm">Confirm</button>
          <button className="friend-request-buttons--decline">Decline</button>
        </FriendRequestButtons>
      </FriendRequestItem>
    </FriendRequestContainer>
  );
}
