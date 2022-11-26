import styled from 'styled-components';
import { device } from '../../styles/themes/default';

export const PostContainer = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0 1.5rem;

  p {
    padding: 0 1.5rem;
    font-size: ${props => props.theme.fontSize['base']};
    color: ${props => props.theme.colors['zinc-800']};

    @media (min-width: ${device['mobile']}) {
      padding: 0 1rem 0;
      font-size: ${props => props.theme.fontSize['xs']};
    }
  }

  img {
    max-width: 736px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: ${device['mobile']}) {
    padding: 1rem 0 1.5rem;
  }
`;

export const PostHeader = styled.header`
  padding: 0rem 1.5rem;
  display: flex;
  gap: 8px;

  img {
    max-width: 3rem;
    width: 100%;
    height: auto;
    clip-path: circle();
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-size: ${props => props.theme.fontSize['base']};
      font-weight: 600;
      color: ${props => props.theme.colors['zinc-800']};

      @media (min-width: ${device['mobile']}) {
        font-size: ${props => props.theme.fontSize['sm']};
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

  @media (min-width: ${device['mobile']}) {
    padding: 0 1rem;
  }
`;

export const PostFooter = styled.footer`
  padding: 0.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSize['sm']};
  font-weight: 700;
  color: ${props => props.theme.colors['zinc-800']};

  @media (min-width: ${device['mobile']}) {
    padding: 0.5rem 1rem 0;
    font-size: ${props => props.theme.fontSize['xs']};
  }
`;

export const PostLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon-postLikes {
    color: ${props => props.theme.colors['rose-500']};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.7);
    }

    @media (min-width: ${device['mobile']}) {
      max-width: 1.25rem;
      width: 100%;
      height: auto;
    }
  }
`;

export const PostComments = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .comments {
    padding: 0;
    color: ${props => props.theme.colors['zinc-800']};
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
      color: ${props => props.theme.colors['sky-500']};
    }
  }
`;