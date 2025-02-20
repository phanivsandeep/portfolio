import { motion } from 'framer-motion';
import data from '../data/data.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {data.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects