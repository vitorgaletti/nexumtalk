import { Feed } from '../../components/Feed';
import { Sidebar } from '../../components/Sidebar';
import { Profile } from './components/Profile';
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
