import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;

    scrollbar-color: ${props => props.theme.colors['gray-300']} ${props =>
  props.theme.colors['zinc-100']};
    scrollbar-width: thin;
  }

  body {
    background-color: ${props => props.theme.colors['zinc-100']};
    -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Inter', sans-serif;
      font-size: ${props => props.theme.fontSize['base']};
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 700;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }


    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 1rem;
      background-color: ${props => props.theme.colors['zinc-100']};
    }


    &::-webkit-scrollbar {
      width: 10px;
      background-color: ${props => props.theme.colors['zinc-100']};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${props => props.theme.colors['gray-300']};
      -webkit-border-radius: 1em;
    }

    .dialog-overlay {
      background-color: ${props => props.theme.colors['overlay']};
      position: fixed;
      inset: 0;
      animation: overlayShow 3s  cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1;
    }

    @keyframes overlayShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }



`;
