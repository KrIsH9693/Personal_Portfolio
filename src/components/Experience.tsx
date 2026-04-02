// components/Experience.tsx
import { motion } from "framer-motion";

const experiences = [
  {
  title: "Technical Support Engineer",
  company: "DSO Software Pvt Ltd",
  duration: "May 2024 - Present",
  description:
    "Provided technical support by troubleshooting complex issues and assisting users effectively, while gaining hands-on experience in building responsive web applications with React and TypeScript, implementing modern UI/UX, and optimizing performance for better user experience.",
  },
  {
  title: "Front-End Developer (Personal Projects)",
  company: "Self-Learning / Portfolio",
  duration: "May 2023 - Present",
  description:
    "Built multiple personal front-end projects showcasing responsive design, smooth animations, and modern UI using HTML, CSS, JavaScript, React, Python, SQL Server Management Studio, Tailwind CSS, and Framer Motion.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-black/10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          What I’ve Worked On
        </motion.h2>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transform transition shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}