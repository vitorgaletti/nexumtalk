import { Feed } from '../../components/Feed';
import { Sidebar } from '../../components/Sidebar';
import { Profile } from '../Home/components/Profile';
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
