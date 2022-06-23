import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <div>
            <p className="bg-blue-500 flex justify-center items-center rounded py-1 px-2 dark:bg-gray-500 dark:text-gray-900">
              Google 🔎
            </p>
          </div>
        </Link>
        <div className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
          <DarkModeSwitch
            checked={darkTheme}
            onChange={() => setDarkTheme(!darkTheme)}
            size={30}
            moonColor="black"
          />
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
