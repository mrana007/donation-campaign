import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto pt-12">
      <nav className="md:flex justify-between items-center">
        <Logo></Logo>
        <ul className="md:flex gap-12">
          <div className="flex justify-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          </div>
          <div className="flex justify-center">
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          </div>
          <div className="flex justify-center">
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
