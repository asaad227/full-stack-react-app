import { Link, Outlet } from "react-router-dom";
import "./index.css";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav className="nav-bar">
      <div className="home-nav">
        <Link className="link" to="/home">Home</Link>
        </div>
        <div className="app-nav">
        <Link className="link" to="/app">App</Link>
        </div>
        <div className="about-nav">
        <Link className="link" to="/database">DataBase</Link>
        </div>
        <div className="about-nav">
        <Link className="link" to="/dialog">Dialog</Link>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;
