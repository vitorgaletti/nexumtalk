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
            Home
          </a>
        </li>

        <li>
          <a href="#">
            <BsPersonSquare />
            My Profile
          </a>
        </li>

        <li>
          <a href="#">
            <MdPhotoSizeSelectActual />
            Photos
          </a>
        </li>

        <li>
          <a href="#">
            <RiMessage2Line />
            Messages
          </a>
        </li>

        <li>
          <a href="#">
            <FaUserFriends />
            Friends
          </a>
        </li>

        <li>
          <a href="#">
            <MdSearch />
            Search
          </a>
        </li>

        <li>
          <a href="#">
            <GrView className="icon" />
            Last Visitors
          </a>
        </li>
      </ul>
    </MenuContainer>
  );
}
