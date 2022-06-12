import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { logout } from '../service';
import AuthContext from '../context';

const style = {
  button: "items-center rounded border border-[#282b2f] font-semibold px-8 py-1"
};

function AuthButton({ className }) {
  const { isLogged, handleLogout: onLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <button className={classNames(({ isActive }) => (isActive ? 'active' : ''), `${style.button}`, className)} onClick={handleLogoutClick}>
      Logout
    </button>
  ) : (
    <button as={Link} to="/login" className={classNames(`${style.button}`, className)}>
      Login
    </button>
  );
}

export default AuthButton;
