import { motion } from 'framer-motion';
import data from '../data/data.json';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Work Experience
          </span>
        </h2>

        <div className="space-y-8">
          {data.experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{exp.duration}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-300 ml-4 before:content-['•'] before:mr-2 before:text-blue-500">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;