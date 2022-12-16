import { DialogClose } from '@radix-ui/react-dialog';
import { BsPersonSquare } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { MdHome, MdPhotoSizeSelectActual, MdSearch } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { NavbarMobileContainer, NavbarMobileContent } from './styles';
import logoImg from '/logo.svg';

export function NavbarMobile() {
  const { nickname } = useParams();
  const { pathname } = useLocation();

  function hasSubPagesHome(): boolean {
    const hasSubPagesHome = pathname.includes(`/${nickname}`);
    return hasSubPagesHome;
  }

  function hasSubPagesMyProfile(): boolean {
    const allowSubPagesMyProfile =
      pathname.includes(`/${nickname}`) ||
      pathname.includes(`${nickname}/about`) ||
      pathname.includes(`${nickname}/information`);

    const deniedPagesMyProfile =
      pathname.includes(`/${nickname}/photos`) ||
      pathname.includes(`/${nickname}/friends`);

    return allowSubPagesMyProfile && !deniedPagesMyProfile;
  }

  return (
    <NavbarMobileContainer>
      <NavLink to="/">
        <DialogClose>
          <img src={logoImg} alt="Logo" />
          <h1>NexumTalk</h1>
        </DialogClose>
      </NavLink>

      <hr />

      <NavbarMobileContent
        hasSubPagesHome={hasSubPagesHome()}
        hasSubPagesMyProfile={hasSubPagesMyProfile()}
      >
        <ul>
          <li>
            <NavLink to="/" title="Home" className="activeLinkHome">
              <DialogClose>
                <MdHome />
                <span>Home</span>
              </DialogClose>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/${nickname}`}
              title="My Profile"
              className="activeLinkMyProfile"
            >
              <DialogClose>
                <BsPersonSquare />
                <span>My Profile</span>
              </DialogClose>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/${nickname}/photos`}>
              <DialogClose>
                <MdPhotoSizeSelectActual />
                <span>Photos</span>
              </DialogClose>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/${nickname}/messages`}>
              <DialogClose>
                <RiMessage2Line />
                <span>Messages</span>
              </DialogClose>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/${nickname}/friends`}>
              <DialogClose>
                <FaUserFriends />
                <span>Friends</span>
              </DialogClose>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/${nickname}/search`}>
              <DialogClose>
                <MdSearch />
                <span>Search</span>
              </DialogClose>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/${nickname}/lastvisitors`}>
              <DialogClose>
                <GrView className="last-visitors--icon" />
                <span>Last Visitors</span>
              </DialogClose>
            </NavLink>
          </li>
        </ul>
      </NavbarMobileContent>
    </NavbarMobileContainer>
  );
}
