import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background-color: ${props => props.theme.colors['white']};
  border: 1px solid ${props => props.theme.colors['gray-300']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const AboutProfile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  word-break: break-word;

  .about-profile__quotes {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-600']};
    font-weight: 700;

    &::before {
      content: '"';
    }

    &::after {
      content: '."';
    }
  }

  .about-profile__looking-for {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['sky-500']};

    p {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 400;
      color: ${props => props.theme.colors['zinc-600']};
    }
  }

  .about-profile__education {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['sky-500']};

    p {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 400;
      color: ${props => props.theme.colors['zinc-600']};
    }
  }

  .about-profile__occupation {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['sky-500']};

    p {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 400;
      color: ${props => props.theme.colors['zinc-600']};
    }
  }

  .about-profile__relationship-status {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['sky-500']};

    p {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 400;
      color: ${props => props.theme.colors['zinc-600']};
    }
  }

  .about-profile__join-date {
    font-size: ${props => props.theme.fontSize['xs']};
    color: ${props => props.theme.colors['zinc-600']};
    text-align: center;
  }
`;
