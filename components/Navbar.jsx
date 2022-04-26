import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-teal-500 py-5">
      <nav className="flex justify-between px-20 items-center">
        <h3 className="text-3xl text-white">Logo</h3>
        <ul className="flex items-center space-x-5 text-xl text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
