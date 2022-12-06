import { BsPersonSquare } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { MdHome, MdPhotoSizeSelectActual, MdSearch } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';

import { MenuContainer } from './styles';

export function MenuBar() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <a href="#">
            <MdHome />
            <span>Home</span>
          </a>
        </li>

        <li>
          <a href="#">
            <BsPersonSquare />
            <span>My Profile</span>
          </a>
        </li>

        <li>
          <a href="#">
            <MdPhotoSizeSelectActual />
            <span>Photos</span>
          </a>
        </li>

        <li>
          <a href="#">
            <RiMessage2Line />
            <span>Messages</span>
          </a>
        </li>

        <li>
          <a href="#">
            <FaUserFriends />
            <span>Friends</span>
          </a>
        </li>

        <li>
          <a href="#">
            <MdSearch />
            <span>Search</span>
          </a>
        </li>

        <li>
          <a href="#">
            <GrView className="icon" />
            <span>Last Visitors</span>
          </a>
        </li>
      </ul>
    </MenuContainer>
  );
}
