import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

import AuthButton from "../auth/AuthButton/AuthButton";

const style = {
  navWrapper: "flex items-center w-full mb-6",
  logoContainer: "w-full",
  logo: "font-extrabold text-2xl",
  navContainer: "flex items-center w-full justify-between",
  navLink: "flex items-center justify-center font-bold w-1/6",
};

function Header({ className }) {
  return (
    <header className={style.navWrapper}>
      <nav className={style.navContainer}>
        <div className={style.logoContainer}>
          <Link to="/">
            <h1 className={style.logo}>Nodepop</h1>
          </Link>
        </div>
        <NavLink
          to="/adverts/new"
          className={classNames(
            ({ isActive }) => (isActive ? "active" : ""),
            `${style.navLink}`,
            className
          )}
        >
          Create advert
        </NavLink>
        <NavLink
          to="/adverts"
          className={classNames(
            ({ isActive }) => (isActive ? "active" : ""),
            `${style.navLink}`,
            className
          )}
          end
        >
          View all
        </NavLink>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;
