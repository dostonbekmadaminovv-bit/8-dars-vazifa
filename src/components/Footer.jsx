import React from "react";
//image
import Logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
// icons
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
function Footer() {
  return (
    <div className="w-full max-w-300 mx-auto px-10">
      <div className="flex mb-8">
        <div className="w-148">
          <img src={Logo} alt="logo" />
          <p className="w-96 mt-4">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        {/* quick links */}
        <div className="w-70 flex flex-col">
          <h2 className="font-bold mb-4">Quick Links</h2>
          <Link className="text-gray-400 mb-2" to="/">
            Home
          </Link>
          <Link className="text-gray-400 mb-2" to="/posts">
            Posts
          </Link>
          <Link className="text-gray-400 mb-2" to="/login">
            Login
          </Link>
        </div>
        {/* connect */}
        <div>
          <h2 className="font-bold mb-4">Connect</h2>
          {/* icons */}
          <div className="flex gap-3 items-center">
            <Link className="p-2" to="https://x.com" target="_blank">
              <FiTwitter className="text-gray-400 w-5 h-5 " />
            </Link>
            <Link className="p-2" to="https://github.com" target="_blank">
              <FiGithub className="text-gray-400 w-5 h-5  " />
            </Link>
            <Link className="p-2" to="https://linkedin.com" target="_blank">
              <FiLinkedin className="text-gray-400 w-5 h-5  " />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-8 text-gray-400 text-center">
        © 2025 Blogify. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
