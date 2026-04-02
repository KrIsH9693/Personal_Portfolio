import { FaReact,  FaGitAlt, FaPython, FaDatabase, FaFigma, FaPhotoVideo } from "react-icons/fa";
import { SiTypescript,SiBootstrap, SiTailwindcss, SiPostman, SiSwagger, SiCoreldraw, SiVercel, SiFlask, SiJavascript } from "react-icons/si";

const skillsData = {
  frontend: [
    { name: "HTML", icon: <SiJavascript className="text-yellow-500" /> }, // no official HTML icon in react-icons so JS used as placeholder
    { name: "CSS", icon: <SiTailwindcss className="text-cyan-400" /> }, // Tailwind as CSS related
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  ],
  backend: [
    { name: "SQL Server", icon: <FaDatabase className="text-blue-700" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-500" /> },
    // { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  ],
  languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
  ],
  tools: [
    // { name: "VS Code", icon: <SiVisualstudio className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Swagger", icon: <SiSwagger className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Photoshop", icon: <FaPhotoVideo className="text-blue-600" /> },
    { name: "CorelDRAW", icon: <SiCoreldraw className="text-red-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-gray-200" /> },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Frontend</h3>
            <ul className="space-y-4">
              {skillsData.frontend.map(({ name, icon }, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-default">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-lg">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Backend</h3>
            <ul className="space-y-4">
              {skillsData.backend.map(({ name, icon }, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-default">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-lg">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Languages</h3>
            <ul className="space-y-4">
              {skillsData.languages.map(({ name, icon }, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-default">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-lg">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">Tools</h3>
            <ul className="space-y-4">
              {skillsData.tools.map(({ name, icon }, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-default">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-lg">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}