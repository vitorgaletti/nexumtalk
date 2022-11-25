import logoImg from '/logo.svg';

import { MenuBar } from '../MenuBar';
import { MenuMobileContainer, MenuMobileLogo } from './styles';

export function MenuMobile() {
  return (
    <MenuMobileContainer>
      <MenuMobileLogo>
        <img src={logoImg} alt="Logo" />
        <h1>NexumTalk</h1>
      </MenuMobileLogo>
      <hr />
      <MenuBar />
    </MenuMobileContainer>
  );
}
