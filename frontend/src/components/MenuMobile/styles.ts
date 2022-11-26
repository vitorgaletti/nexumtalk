import styled from 'styled-components';

export const MenuMobileContainer = styled.div`
  max-width: calc(100vw / 2);
  width: 100%;
  height: 50vh;
  padding: 1rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 4px;
  animation: delayShow 3s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes delayShow {
    from {
      transform: translateX(-80%);
    }
    to {
      transform: translateX(0%);
    }
  }

  hr {
    height: 1px;
    border: 0;
    margin-top: 1rem;
    background-color: ${props => props.theme.colors['gray-300']};
  }
`;

export const MenuMobileLogo = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  img {
    max-width: 1.5rem;
    width: 100%;
    height: auto;
  }

  h1 {
    font-size: ${props => props.theme.fontSize['xl']};
    color: ${props => props.theme.colors['sky-500']};
  }
`;
