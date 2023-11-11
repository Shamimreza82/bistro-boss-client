import { Link, NavLink } from "react-router-dom";

const NavBer = () => {
  const navBerDainamic = (
    <div className="space-x-4 lg:flex lg:flex-row items-center">
        <NavLink
          to="/"
          className={({ isActive, isPending })  =>
            isPending ? " text-white font-bold" : isActive ? " text-[#EEFF25] font-bold" : ""
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? " text-white" : isActive ? " text-[#EEFF25] font-bold" : ""
          }
        >
          CONTACT US
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? " text-white" : isActive ? " text-[#EEFF25] font-bold" : ""
          }
        >
          DASHBOARD
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? " text-white" : isActive ? " text-[#EEFF25] font-bold" : ""
          }
        >
           OUR MENU
        </NavLink>
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending ? " text-white" : isActive ? " text-[#EEFF25] font-bold" : ""
          }
        >
           Order Food
        </NavLink>
    </div>
  );
  return (
    <>
      <div className="navbar fixed z-10 justify-between bg-opacity-20 text-white bg-slate-800">
        <div className="navbar-start px-8">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBerDainamic}
            </ul>
          </div>
          <div className="space-y-0">
            <p className="font-bold">BISTRO BOSS</p>
            <p className="tracking-widest">Restaurant</p>
          </div>
        </div>

        {/* mobile Responsive  */}

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-2">{navBerDainamic}</ul>
        </div>
        <div className="px-5">
          <Link className="btn">Login</Link>
        </div>
      </div>
    </>
  );
};

export default NavBer;
