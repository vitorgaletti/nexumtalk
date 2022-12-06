import { HiHeart } from 'react-icons/hi';

import avatarImg from '../../assets/img/avatar.jpg';
import bannerImg from '../../assets/img/banner.jpg';

import {
  PostComments,
  PostContainer,
  PostFooter,
  PostHeader,
  PostImage,
  PostLikes,
  PostTitle
} from './styles';

interface PostProps {
  text?: boolean;
  image?: boolean;
}

export function Post({ text, image }: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <img src={avatarImg} alt="Avatar" />
        <div>
          <h4>Vitor</h4>
          <span>45m</span>
        </div>
      </PostHeader>

      <PostTitle text={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor,
        purus in pulvinar rhoncus, ipsum odio ultrices justo, sit amet commodo
        sem lectus in nisl. Praesent commodo justo risus, a euismod erat tempor
        quis.
      </PostTitle>
      <PostImage src={bannerImg} alt="Photo Post" image={image} />

      <PostFooter>
        <PostLikes>
          <HiHeart size={24} title="Like" className="icon-postLikes" />
          <span>50</span>
        </PostLikes>
        <PostComments>
          <span>10</span>
          <p className="comments" title="Comment">
            Comments
          </p>
        </PostComments>
      </PostFooter>
    </PostContainer>
  );
}
