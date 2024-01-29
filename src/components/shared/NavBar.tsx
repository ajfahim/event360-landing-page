import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full py-6">
      <div className="w-full max-w-7xl flex justify-between mx-auto ">
        <h1 className="text-3xl font-bold">
          Event <span className="gradient-text">360</span>
        </h1>
        <div className="font-semibold space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
