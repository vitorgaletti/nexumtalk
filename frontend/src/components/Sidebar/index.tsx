import { FriendList } from '../../pages/Home/components/FriendList';
import { FriendRequest } from '../../pages/Home/components/FriendRequest';

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
