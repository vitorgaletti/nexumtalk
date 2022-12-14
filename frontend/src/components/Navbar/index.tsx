import { BsPersonSquare } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { MdHome, MdPhotoSizeSelectActual, MdSearch } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';
import { NavLink, useParams } from 'react-router-dom';
import { useHasSubPages } from '../../hooks/useHasSubPages';
import { NavbarContainer } from './styles';

export function Navbar() {
  const { nickname } = useParams();

  const { hasSubPagesMyProfile } = useHasSubPages();

  return (
    <NavbarContainer hasSubPagesMyProfile={hasSubPagesMyProfile()}>
      <ul>
        <li>
          <NavLink to="/" title="Home">
            <MdHome />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to={`/${nickname}`}
            title="My Profile"
            className="activeLinkMyProfile"
          >
            <BsPersonSquare />
            <span>My Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${nickname}/photos`} title="Photos">
            <MdPhotoSizeSelectActual />
            <span>Photos</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${nickname}/messages`} title="Messages">
            <RiMessage2Line />
            <span>Messages</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${nickname}/friends`} title="Friends">
            <FaUserFriends />
            <span>Friends</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${nickname}/search`} title="Search">
            <MdSearch />
            <span>Search</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${nickname}/lastvisitors`} title="Last Visitors">
            <GrView className="last-visitors--icon" />
            <span>Last Visitors</span>
          </NavLink>
        </li>
      </ul>
    </NavbarContainer>
  );
}
