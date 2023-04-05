import { NavLink, Outlet } from "react-router-dom";
import { url } from "./utils";

function MainLayout() {
  return (
    <>
      <nav>
        <NavLink to={url('home')}>Homepage</NavLink>
        <NavLink to={url('home.blog')}>Blog</NavLink>
        <NavLink to={url('home.contact')}>Contact</NavLink>
        <NavLink to={url('home.profile')}>Profile</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default MainLayout;
