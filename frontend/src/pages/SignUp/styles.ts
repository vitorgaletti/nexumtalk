import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors['sky-500']};
`;

export const SignUpContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const SignUpLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  img {
    max-width: 1.5rem;
    width: 100%;
    height: auto;
  }

  h1 {
    font-size: ${props => props.theme.fontSize['xl']};
    color: ${props => props.theme.colors['white']};
  }
`;

export const SignUpForm = styled.div`
  width: min-content;
  padding: 1.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${props => props.theme.colors['white']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  .signup-form__progress-root {
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors['gray-300']};
    border-radius: 99999px;
    width: 100%;
    height: 0.5rem;
    transform: translateZ(0);
  }

  .signup-form__progress-indicator {
    background-color: ${props => props.theme.colors['green-500']};
    width: 100%;
    height: 100%;
    transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    font-size: ${props => props.theme.fontSize['sm']};
    color: ${props => props.theme.colors['sky-500']};
    font-weight: 700;
  }

  .form-container__buttons-actions {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      background-color: ${props => props.theme.colors['sky-500']};
      color: ${props => props.theme.colors['white']};
      border-radius: 4px;
    }
  }
`;
