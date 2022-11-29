import avatarImg from '../../assets/img/avatar.jpg';

import {
  FriendRequestButtons,
  FriendRequestContainer,
  FriendRequestContent,
  FriendRequestCountry,
  FriendRequestHeader,
  FriendRequestName,
  FriendRequestProfile
} from './styles';

export function FriendRequest() {
  return (
    <FriendRequestContainer>
      <FriendRequestHeader>
        <h2>Friend Request</h2>
        <span>See all</span>
      </FriendRequestHeader>

      <FriendRequestContent>
        <FriendRequestProfile>
          <div className="avatarRequestFriend">
            <img src={avatarImg} alt="Profile photo from a request friend" />
          </div>
          <FriendRequestName>
            <h4>Vitor</h4>
            <FriendRequestCountry>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
                className="flag"
              />
              <span>Brazil</span>
            </FriendRequestCountry>
          </FriendRequestName>
        </FriendRequestProfile>

        <FriendRequestButtons>
          <button className="confirmButton">Confirm</button>
          <button className="declineButton">Decline</button>
        </FriendRequestButtons>
      </FriendRequestContent>

      <FriendRequestContent>
        <FriendRequestProfile>
          <div className="avatarRequestFriend">
            <img src={avatarImg} alt="Profile photo from a request friend" />
          </div>
          <FriendRequestName>
            <h4>Vitor</h4>
            <FriendRequestCountry>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
                className="flag"
              />
              <span>Brazil</span>
            </FriendRequestCountry>
          </FriendRequestName>
        </FriendRequestProfile>

        <FriendRequestButtons>
          <button className="confirmButton">Confirm</button>
          <button className="declineButton">Decline</button>
        </FriendRequestButtons>
      </FriendRequestContent>

      <FriendRequestContent>
        <FriendRequestProfile>
          <div className="avatarRequestFriend">
            <img src={avatarImg} alt="Profile photo from a request friend" />
          </div>
          <FriendRequestName>
            <h4>Vitor</h4>
            <FriendRequestCountry>
              <img
                src="https://www.countryflagicons.com/FLAT/24/BR.png"
                alt="Brazil"
                className="flag"
              />
              <span>Brazil</span>
            </FriendRequestCountry>
          </FriendRequestName>
        </FriendRequestProfile>

        <FriendRequestButtons>
          <button className="confirmButton">Confirm</button>
          <button className="declineButton">Decline</button>
        </FriendRequestButtons>
      </FriendRequestContent>
    </FriendRequestContainer>
  );
}
