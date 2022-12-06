import avatarImg from '../../assets/img/avatar.jpg';
import { Post } from '../Post';
import { FeedContainer, NewPost } from './styles';

export function Feed() {
  return (
    <FeedContainer>
      <NewPost>
        <img src={avatarImg} alt="Avatar" />
        <strong>What’s New ? </strong>
      </NewPost>
      <Post image text />
      <Post text />
      <Post image />
      <Post image text />
      <Post text />
      <Post image />
      <Post image text />
      <Post text />
      <Post image />
    </FeedContainer>
  );
}
