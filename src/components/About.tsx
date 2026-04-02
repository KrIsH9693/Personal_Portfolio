// components/About.tsx

import { motion } from "framer-motion";
import AboutImage from "../assets/About.png"; // <-- import from src/assets

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

          {/* IMAGE */}
          <img
            src={AboutImage} // <-- use imported variable
            alt="about"
            className="relative w-[280px] md:w-[350px] rounded-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-400 leading-relaxed mb-6">
            I am a motivated professional with extensive experience in Technical Support, where I honed my skills in problem-solving, troubleshooting complex technical issues, and delivering excellent customer service. This experience has strengthened my attention to detail, logical thinking, and communication skills.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Alongside, I have pursued my passion for front-end development by completing multiple projects involving HTML, CSS, JavaScript, and modern frameworks. I am now focused on transitioning into a full-time Front-End Developer role, where I can create user-friendly and visually appealing web experiences. My goal is to combine my technical expertise and creative coding skills to make a meaningful impact through real-world applications.
          </p>

          {/* Optional Highlights */}
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
              Clean Code
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
              Scalable Apps
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
              Modern UI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}