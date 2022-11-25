import { FriendList } from '../FriendList';
import { FriendRequest } from '../FriendRequest';

import { BirthdayFriend } from '../BirthdayFriend';
import { SidebarContainer } from './styles';
export function Sidebar() {
  return (
    <SidebarContainer>
      <BirthdayFriend />
      <FriendRequest />
      <FriendList />
    </SidebarContainer>
  );
}
