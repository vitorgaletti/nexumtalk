import styled from 'styled-components';

export const ProfileLanguagesContainer = styled.div`
  width: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  .profile-languages__header {
    h3 {
      font-size: ${props => props.theme.fontSize['base']};
      color: ${props => props.theme.colors['zinc-800']};
    }
  }
`;

export const ProfileLanguagesContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 1.5rem;
`;

export const ProfileLanguagesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    max-width: 2.5rem;
    width: 100%;
    height: auto;
    clip-path: circle();
  }

  .profile-languages__item-language {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;

    p {
      font-size: ${props => props.theme.fontSize['sm']};
      color: ${props => props.theme.colors['zinc-600']};
      font-weight: 600;
    }

    .ProgressRoot {
      position: relative;
      overflow: hidden;
      background: ${props => props.theme.colors['gray-300']};
      border-radius: 99999px;
      width: 9.375rem;
      height: 0.5rem;
      transform: translateZ(0);
    }

    .ProgressIndicator {
      background-color: ${props => props.theme.colors['green-500']};
      width: 100%;
      height: 100%;
      transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
    }
  }
`;
