// components/Navbar.tsx

import { motion } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";

const sections = ["Home", "About", "Experience", "Education", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const active = useScrollSpy(sections, 100); // offset 100px for navbar height

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Krishna
        </h1>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 pr-2">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative text-sm capitalize tracking-wide transition duration-300 ${
                active === sec ? "text-white" : "text-gray-400"
              } hover:text-white`}
            >
              {sec}

              {/* ACTIVE UNDERLINE */}
              {active === sec && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}