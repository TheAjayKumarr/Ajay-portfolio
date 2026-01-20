import DockMenu from "./DockMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <DockMenu />
      <Outlet />
    </>
  );
};

export default Layout;
