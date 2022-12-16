import styled from 'styled-components';
import { device } from '../../../../styles/themes/default';

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

  @media (min-width: ${device['tablet']}) {
    padding: 2rem;
  }
`;

export const AboutProfile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  word-break: break-word;

  @media (min-width: ${device['tablet']}) {
    align-items: flex-start;
  }

  .about-profile__quotes {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['zinc-600']};
    font-weight: 700;

    @media (min-width: ${device['tablet']}) {
      font-size: ${props => props.theme.fontSize['base']};
    }

    &::before {
      content: '"';
    }

    &::after {
      content: '."';
    }
  }

  .about-profile__item {
    font-size: ${props => props.theme.fontSize['sm']};
    font-weight: 700;
    color: ${props => props.theme.colors['sky-500']};

    @media (min-width: ${device['tablet']}) {
      font-size: ${props => props.theme.fontSize['base']};
    }

    p {
      font-size: ${props => props.theme.fontSize['sm']};
      font-weight: 400;
      color: ${props => props.theme.colors['zinc-600']};

      @media (min-width: ${device['tablet']}) {
        font-size: ${props => props.theme.fontSize['base']};
      }
    }
  }

  .about-profile__join-date {
    font-size: ${props => props.theme.fontSize['xs']};
    color: ${props => props.theme.colors['zinc-600']};
    text-align: center;

    @media (min-width: ${device['tablet']}) {
      font-size: ${props => props.theme.fontSize['sm']};
    }
  }
`;

export const AboutProfileLanguages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${device['tablet']}) {
    flex-direction: row;
    justify-content: space-between;

    hr {
      display: none;
    }
  }
`;
