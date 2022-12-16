import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BsPersonSquare } from 'react-icons/bs';
import { FiEdit, FiSettings } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdNotificationsActive } from 'react-icons/md';
import { RiArrowDownSLine, RiLogoutBoxLine } from 'react-icons/ri';
import { NavLink, useParams } from 'react-router-dom';
import avatarImg from '../../assets/img/avatar.jpg';
import { Navbar } from '../Navbar';
import { NavbarMobile } from '../NavbarMobile';
import {
  AvatarContent,
  ContainerHeader,
  DropdownMenuContent,
  LogoContent
} from './styles';
import logoImg from '/logo.svg';

export function Header() {
  const { nickname } = useParams();
  return (
    <ContainerHeader>
      <LogoContent>
        <Dialog.Root modal>
          <Dialog.Trigger asChild>
            <button>
              <HiOutlineMenu
                size={24}
                color="white"
                className="menu-hamburguer"
              />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content>
              <NavbarMobile />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <NavLink to="/" className="navlink__logo">
          <img src={logoImg} alt="NexumTalk" />
          <h1>NexumTalk</h1>
        </NavLink>
      </LogoContent>

      <div className="menu-desktop">
        <Navbar />
      </div>
      <AvatarContent>
        <MdNotificationsActive size={24} className="icon-notification" />
        <h4>Vitor</h4>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="DropdownMenuAvatar">
              <img src={avatarImg} alt="Avatar" />
              <RiArrowDownSLine color="white" size={24} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent>
              <DropdownMenu.Arrow className="DropdownMenuArrow" />
              <DropdownMenu.Item className="DropwdowMenuItem">
                <NavLink to={`${nickname}`}>
                  <BsPersonSquare />
                  My profile
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropwdowMenuItem">
                <NavLink to={`${nickname}/editprofile`}>
                  <FiEdit />
                  Edit Profile
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropwdowMenuItem">
                <NavLink to={`${nickname}/settings`}>
                  <FiSettings />
                  Settings
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="DropdownMenuSeparator" />
              <DropdownMenu.Item className="DropwdowMenuItem">
                <NavLink to="/logout">
                  <RiLogoutBoxLine />
                  Logout
                </NavLink>
              </DropdownMenu.Item>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </AvatarContent>
    </ContainerHeader>
  );
}
