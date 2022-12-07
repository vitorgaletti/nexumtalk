import styled from 'styled-components';

export const SidebarContainer = styled.div`
  max-width: 18.562rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(min-content, max-content));
  gap: 1.5rem;
`;
