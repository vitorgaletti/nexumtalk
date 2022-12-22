/* eslint-disable indent */
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_blue.css';

import styled from 'styled-components';

export const PersonalInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    input {
      width: 12.5rem;
      padding: 0.75rem 1rem;
      background-color: ${props => props.theme.colors['white']};
      border: 1px solid ${props => props.theme.colors['gray-300']};
      border-radius: 4px;
      color: ${props => props.theme.colors['zinc-800']};
      outline-color: ${props => props.theme.colors['sky-500']};

      &::placeholder {
        color: ${props => props.theme.colors['gray-400']};
      }
    }

    .flatpickr-input {
      width: 100%;
    }
  }

  .input-radio {
    button {
      all: unset;
    }

    .RadioGroupRoot {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .RadioGroupItem {
      background-color: white;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      border: 2px solid ${props => props.theme.colors['zinc-800']};
    }

    .RadioGroupItem:hover {
      background-color: ${props => props.theme.colors['sky-500']};
      border: transparent;
    }
    .RadioGroupItem[data-state='checked'] {
      border-color: ${props => props.theme.colors['sky-500']};
    }

    .RadioGroupItem:focus {
      border: 2px solid ${props => props.theme.colors['sky-500']};
    }

    .RadioGroupIndicator {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: relative;
    }
    .RadioGroupIndicator::after {
      content: '';
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: ${props => props.theme.colors['sky-500']};
    }

    .Label {
      font-size: ${props => props.theme.fontSize['sm']};
      color: ${props => props.theme.colors['zinc-800']};
      line-height: 1;
      user-select: none;
      padding-left: 0.5rem;
    }
  }
`;
