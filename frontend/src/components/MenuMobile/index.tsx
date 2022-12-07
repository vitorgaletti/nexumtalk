import logoImg from '/logo.svg';

import { NavLink } from 'react-router-dom';
import { MenuBar } from '../MenuBar';
import { MenuMobileContainer } from './styles';

export function MenuMobile() {
  return (
    <MenuMobileContainer>
      <NavLink to="/">
        <img src={logoImg} alt="Logo" />
        <h1>NexumTalk</h1>
      </NavLink>
      <hr />
      <MenuBar />
    </MenuMobileContainer>
  );
}
