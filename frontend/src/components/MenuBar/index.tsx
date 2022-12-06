import { BsPersonSquare } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { MdHome, MdPhotoSizeSelectActual, MdSearch } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { MenuContainer } from './styles';

export function MenuBar() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <NavLink to="/" title="Home">
            <MdHome />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/myprofile" title="My Profile">
            <BsPersonSquare />
            <span>My Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/myprofile/photos">
            <MdPhotoSizeSelectActual />
            <span>Photos</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/myprofile/photos">
            <RiMessage2Line />
            <span>Messages</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/myprofile/messages">
            <FaUserFriends />
            <span>Friends</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/search">
            <MdSearch />
            <span>Search</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/myprofile/lastvisitors">
            <GrView className="icon" />
            <span>Last Visitors</span>
          </NavLink>
        </li>
      </ul>
    </MenuContainer>
  );
}
