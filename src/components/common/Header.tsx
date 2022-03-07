import React, { Fragment } from "react";
import Logo from "../images/logo";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => (
  <div className="flex w-full flex-row items-center justify-center px-4 py-6 sm:px-6 md:space-x-10">
    <a href="/" className="flex h-full w-20">
      <span className="sr-only">Green Action Studio</span>
      <Logo fill="rgb(16 185 129)" />
    </a>
  </div>
);

export default Header;
