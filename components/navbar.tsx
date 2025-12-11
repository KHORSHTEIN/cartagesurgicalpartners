"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO + NAME */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => scrollTo("#home")}
        >
          <img
            src="/logo.png" // must be in /public/logo.png
            alt="Carthage Surgical Partners Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl"
          />
          <h1 className="text-xl md:text-3xl font-bold text-[#0A3D62] leading-tight">
            Carthage
            <br />
            <span className="text-[#3C8DBC]">Surgical Partners</span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-[#0A3D62] font-medium">
          <li className="cursor-pointer hover:text-[#3C8DBC]" onClick={() => scrollTo("#home")}>
            Home
          </li>
          <li className="cursor-pointer hover:text-[#3C8DBC]" onClick={() => scrollTo("#about")}>
            About
          </li>
          <li className="cursor-pointer hover:text-[#3C8DBC]" onClick={() => scrollTo("#services")}>
            Services
          </li>
          <li className="cursor-pointer hover:text-[#3C8DBC]" onClick={() => scrollTo("#team")}>
            Team
          </li>
          <li className="cursor-pointer hover:text-[#3C8DBC]" onClick={() => scrollTo("#reviews")}>
            Reviews
          </li>
          <li className="cursor-pointer hover:text-[#3C8DBC]" onClick={() => scrollTo("#contact")}>
            Contact
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-[#0A3D62]" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col gap-6 py-6 px-6 text-[#0A3D62] font-semibold">
            <li className="cursor-pointer" onClick={() => scrollTo("#home")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("#about")}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("#services")}>
              Services
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("#team")}>
              Team
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("#reviews")}>
              Reviews
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("#contact")}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
