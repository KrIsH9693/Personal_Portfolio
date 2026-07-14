import { motion } from "framer-motion";

const projects = [
  {
    title: "Channel Manager",
    description: "A channel manager platform to sync hotel bookings from multiple sources.",
    techStack: ["HTML", "CSS", "JavaScript"],
    live: "https://channel-manager-sable.vercel.app/",
    github: "https://github.com/KrIsH9693/Channel_Manager.git",
    screenshot: "/screenshots/channel-manager.png",
  },
  {
    title: "Shaadi Bio-data",
    description: "A beautiful Shaadi bio-data website with elegant design and details.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://shaadi-bio-data.vercel.app/",
    github: "https://github.com/KrIsH9693/Shaadi_Bio_Data.git",
    screenshot: "/screenshots/shaadi-bio-data.png",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page for a product using modern design principles.",
    techStack: ["React", "Tailwind CSS"],
    live: "https://landing-page-d4kj.vercel.app/",
    github: "https://github.com/KrIsH9693/landing_page.git",
    screenshot: "/screenshots/landing-page.png",
  },
  {
    title: "Cura Link",
    description: "Healthcare platform UI/UX with seamless navigation and functionality.",
    techStack: ["React", "Tailwind CSS"],
    live: "https://cura-link-sand.vercel.app/",
    github: "https://github.com/KrIsH9693/CuraLink.git",
    screenshot: "/screenshots/cura-link.png",
  },
  {
    title: "Travel Eternity Dashboard",
    description: "Dashboard for travel bookings and analytics with clean UI.",
    techStack: ["React", "Tailwind CSS", "Chart.js"],
    live: "https://travel-eternity-dashboard.vercel.app/",
    github: "https://github.com/KrIsH9693/travel_eternity-dashboard.git",
    screenshot: "/screenshots/travel-eternity-dashboard.png",
  },
  {
    title: "Personal Portfolio ",
    description: "Showing my Skills as a Project",
    techStack: ["React", "Tailwind CSS"],
    live: "https://personal-portfolio-nu-mauve-99.vercel.app/",
    github: "https://github.com/KrIsH9693/Personal_Portfolio.git",
    screenshot: "/screenshots/travel-eternity-dashboard.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group rounded-xl overflow-hidden border border-white/20 bg-white/5 shadow-lg cursor-pointer min-h-[350px]"
            >
              {/* Always Visible Content */}
              <div className="p-6 z-10 relative">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-center space-y-6">
                {/* Screenshot */}
                <img
                  src={project.screenshot}
                  alt={`${project.title} Screenshot`}
                  className="rounded-md shadow-lg max-h-40 object-contain"
                />

                {/* Description */}
                <p className="text-gray-300 text-sm max-w-xs">{project.description}</p>

                {/* Links */}
                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.81 1.304 3.495.997.108-.776.42-1.305.763-1.606-2.665-.304-5.467-1.33-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.004 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.432.373.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm">GitHub</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                    aria-label={`${project.title} Live Demo`}
                  >
                    {/* Eye Icon with label */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span className="text-sm">Live View</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
