// components/Education.tsx
import { motion } from "framer-motion";
import ImageLogo from "../assets/image.jfif";
import RimtLogo from "../assets/Rimt.jfif";

const educationData = [
  {
    logo: ImageLogo, 
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Desh Bhagat Foundation Group of Institutions, Moga",
    duration: "2024 - 2027",
    description: "",
  },
  {
    logo: RimtLogo,
    degree: "Diploma in Computer Science Engineering",
    institution: "Rimt Polytechnic College, Mandi Gobindgarh",
    duration: "2019 - 2023",
    description: "",
  },
  {
    logo: null, // no image for remaining
    degree: "Senior Secondary Certificate (12th)",
    institution: "Desh Bhagat Public Senior Secondary School, Lohara, Ludhiana",
    duration: "2018 - 2019",
    description: "",
  },
  {
    logo: null, // no image for remaining
    degree: "Matriculation (10th)",
    institution: "Desh Bhagat Public Senior Secondary School, Lohara, Ludhiana",
    duration: "2016 - 2017",
    description: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-gray-700">
          {educationData.map((edu, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`mb-12 flex flex-col md:flex-row items-center justify-${isLeft ? "start" : "end"} md:justify-${isLeft ? "start" : "end"} relative w-full`}
              >
                {/* Card */}
                <div
                  className={`bg-white/10 border border-gray-600 rounded-xl p-6 md:max-w-md w-full text-white shadow-lg
                    ${isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-right"}
                  `}
                >
                  {/* Logo + text */}
                  <div className="flex items-center mb-3 space-x-4 justify-start">
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-16 h-16 object-cover rounded-md" // image fixed
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{edu.institution}</h3>
                      <p className="text-sm text-gray-400">{edu.degree}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                          />
                        </svg>
                        {edu.duration}
                      </p>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-gray-300 mt-2 text-sm">{edu.description}</p>
                  )}
                </div>

                {/* Timeline circle */}
                <span
                  className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 border-4 border-black"
                  aria-hidden="true"
                ></span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}