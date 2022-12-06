import { Feed } from '../../components/Feed';
import { Profile } from '../../components/Profile';
import { Sidebar } from '../../components/Sidebar';
import { MyProfileContainer } from './styles';
export function MyProfile() {
  return (
    <MyProfileContainer>
      <Profile />
      <Feed />
      <Sidebar />
    </MyProfileContainer>
  );
}
