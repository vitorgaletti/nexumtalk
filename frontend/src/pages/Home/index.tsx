import { Feed } from '../../components/Feed';
import { Profile } from '../../components/Profile';
import { Sidebar } from '../../components/Sidebar';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Feed />
      <Sidebar />
    </HomeContainer>
  );
}
