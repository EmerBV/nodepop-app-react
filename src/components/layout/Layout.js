import { Outlet } from "react-router-dom";

import Header from "./Header";

const style = {
  layoutWrapper: "w-full p-2",
  headerContainer: "flex items-center justify-between",
  layoutContainer: "items-center w-full p-2 justify-center",
  footerContainer: "w-full text-center font-semibold",
};

function Layout() {
  return (
    <div className={style.layoutWrapper}>
      <Header className={style.headerContainer} />
      <main className={style.layoutContainer}>
        <Outlet />
      </main>
      <footer className={style.footerContainer}>Nodepop© 2022</footer>
    </div>
  );
}

export default Layout;
