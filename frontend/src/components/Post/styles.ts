import styled from 'styled-components';
import { device } from '../../styles/themes/default';

interface PostProps {
  text?: boolean;
  image?: boolean;
}

export const PostContainer = styled.div`
  max-width: 42.5rem;
  width: 100%;
  background-color: white;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 1.5rem;

  @media (min-width: ${device['desktop']}) {
    padding: 1.5rem 0 1.5rem;
  }
`;

export const PostTitle = styled.p<PostProps>`
  display: ${props => (props.text ? 'block' : 'none')};
  padding: 0 1rem 0;
  font-size: ${props => props.theme.fontSize['xs']};
  color: ${props => props.theme.colors['zinc-800']};

  @media (min-width: ${device['tablet']}) {
    font-size: ${props => props.theme.fontSize['sm']};
  }

  @media (min-width: ${device['desktop']}) {
    padding: 0 1.5rem 0;
    font-size: ${props => props.theme.fontSize['base']};
  }
`;

export const PostImage = styled.img<PostProps>`
  display: ${props => (props.image ? 'block' : 'none')};
  max-height: 25rem;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PostHeader = styled.div`
  padding: 0 1rem;
  display: flex;
  gap: 0.5rem;

  @media (min-width: ${device['desktop']}) {
    padding: 0rem 1.5rem;
  }

  img {
    max-width: 3rem;
    width: 100%;
    height: auto;
    clip-path: circle();
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h4 {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 600;
      color: ${props => props.theme.colors['zinc-800']};

      @media (min-width: ${device['tablet']}) {
        font-size: ${props => props.theme.fontSize['base']};
      }
    }

    span {
      font-size: ${props => props.theme.fontSize['sm']};
      color: ${props => props.theme.colors['sky-500']};

      @media (min-width: ${device['mobile']}) {
        font-size: ${props => props.theme.fontSize['xs']};
      }
    }
  }
`;

export const PostFooter = styled.div`
  padding: 0.5rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSize['sm']};
  font-weight: 700;
  color: ${props => props.theme.colors['zinc-800']};

  @media (min-width: ${device['mobile']}) {
    font-size: ${props => props.theme.fontSize['xs']};
  }

  @media (min-width: ${device['tablet']}) {
    font-size: ${props => props.theme.fontSize['sm']};
  }

  @media (min-width: ${device['desktop']}) {
    padding: 0.5rem 1.5rem 0;
    font-size: ${props => props.theme.fontSize['base']};
  }
`;

export const PostLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .post-likes--like {
    color: ${props => props.theme.colors['rose-500']};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.7);
      transform: scale(1.2);
    }

    @media (min-width: ${device['mobile']}) {
      max-width: 1.25rem;
      width: 100%;
      height: auto;
    }

    @media (min-width: ${device['desktop']}) {
      max-width: 1.5rem;
    }
  }
`;

export const PostComments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .post-comments--comment {
    padding: 0;
    color: ${props => props.theme.colors['zinc-800']};
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
      color: ${props => props.theme.colors['sky-500']};
    }
  }
`;
