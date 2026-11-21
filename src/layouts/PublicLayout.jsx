import React from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
function PublicLayout() {
  return (
    <>
      <header className="bg-white shadow-2xs">
        <Navbar />
      </header>

      <main className="grow">
        <Outlet />
      </main>
      <footer className="py-12">
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
