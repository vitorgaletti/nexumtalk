import { FriendRequest } from '../../pages/Home/components/FriendRequest';
import { FriendList } from '../FriendList';

import { BirthdayFriend } from '../../pages/Home/components/BirthdayFriend';
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
