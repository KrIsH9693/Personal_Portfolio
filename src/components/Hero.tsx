// components/Hero.tsx

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MeImage from "../assets/me.png"; // <-- IMPORT IMAGE FROM SRC/ASSETS

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold leading-tight min-h-[90px]"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Hey, I am Krishna",
                  "Frontend Developer",
                  "Web Developer",
                  "Web Designer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            I design and develop refined digital products where performance,
            scalability, and user experience come together to create impactful solutions.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-105 transition transform shadow-lg hover:shadow-indigo-500/50"
            >
              Contact Me
            </a>

            <a
              href="mailto:kumarkrishna4867@gmail.com"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-indigo-400 hover:text-indigo-400 transition"
            >
              Email Me
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-2xl">
            <a
              href="https://github.com/KrIsH9693"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-kumar-07015a24a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-80 h-80 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

          <img
            src={MeImage} // <-- FIXED IMAGE
            alt="developer"
            className="relative w-[300px] md:w-[420px] rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}