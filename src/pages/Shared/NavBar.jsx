import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links?.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-semibold">Saiful Islam</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {links?.map((link) => (
            <NavLink
              className="px-2 font-medium"
              key={link.path}
              to={link.path}
            >
              {link.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline text-white font-semibold rounded-xl">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default NavBar;
