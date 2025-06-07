import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Fixed import
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  HomeIcon,
  ShipWheelIcon,
  UsersIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  // State to control sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar on mobile
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* Mobile header with hamburger */}
      <header className="lg:hidden flex items-center justify-between bg-base-200 border-b border-base-300 p-4 sticky top-0 z-30">
        <Link to="/" className="flex items-center gap-2.5">
          <ShipWheelIcon className="size-9 text-primary" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
            Let's Chat
          </span>
        </Link>

        <button
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          className="btn btn-ghost btn-square"
        >
          {sidebarOpen ? (
            <XIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 border-r border-base-300 transform transition-transform duration-300 z-40
          lg:static lg:translate-x-0 lg:flex lg:flex-col lg:h-screen lg:sticky lg:top-0
          ${
            sidebarOpen
              ? "translate-x-0 shadow-lg"
              : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="p-5 border-b border-base-300 flex items-center justify-between lg:hidden">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Let's Chat
            </span>
          </Link>

          {/* Close button on mobile */}
          <button
            onClick={toggleSidebar}
            aria-label="Close menu"
            className="btn btn-ghost btn-square"
          >
            <XIcon className="size-6" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)} // close on link click
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/" ? "btn-active" : ""
            }`}
          >
            <HomeIcon className="size-5 text-base-content opacity-70" />
            <span>Home</span>
          </Link>

          <Link
            to="/friends"
            onClick={() => setSidebarOpen(false)}
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/friends" ? "btn-active" : ""
            }`}
          >
            <UsersIcon className="size-5 text-base-content opacity-70" />
            <span>Friends</span>
          </Link>

          <Link
            to="/notifications"
            onClick={() => setSidebarOpen(false)}
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/notifications" ? "btn-active" : ""
            }`}
          >
            <BellIcon className="size-5 text-base-content opacity-70" />
            <span>Notifications</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-base-300 mt-auto">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={authUser?.profilePic} alt="User Avatar" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{authUser?.fullName}</p>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="size-2 rounded-full bg-success inline-block" />
                Online
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
