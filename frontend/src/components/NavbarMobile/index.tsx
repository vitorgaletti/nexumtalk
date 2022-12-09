import logoImg from '/logo.svg';

import { NavLink } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { NavbarMobileContainer } from './styles';

export function NavbarMobile() {
  return (
    <NavbarMobileContainer>
      <NavLink to="/">
        <img src={logoImg} alt="Logo" />
        <h1>NexumTalk</h1>
      </NavLink>
      <hr />
      <Navbar />
    </NavbarMobileContainer>
  );
}
