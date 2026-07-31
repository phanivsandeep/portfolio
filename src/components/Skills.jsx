import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Cloud,
  Wrench,
  Globe,
  Server,
  Zap,
  Shield,
  Cpu,
  Layers,
} from 'lucide-react';
import data from '../data/data.json';

const Skills = () => {
  const skillCategories = {
    languages: {
      icon: Code,
      color: 'blue',
      bgColor: 'from-blue-500/20 to-blue-600/20',
    },
    frameworks: {
      icon: Layers,
      color: 'purple',
      bgColor: 'from-purple-500/20 to-purple-600/20',
    },
    databases: {
      icon: Database,
      color: 'green',
      bgColor: 'from-green-500/20 to-green-600/20',
    },
    cloud: {
      icon: Cloud,
      color: 'cyan',
      bgColor: 'from-cyan-500/20 to-cyan-600/20',
    },
    tools: {
      icon: Wrench,
      color: 'orange',
      bgColor: 'from-orange-500/20 to-orange-600/20',
    },
  };

  return (
    <section id='skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'>
              Technical Skills
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Technologies and tools I work with to build scalable solutions
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {Object.entries(data.skills).map(
            ([category, skills], categoryIdx) => {
              const categoryInfo = skillCategories[category];
              const IconComponent = categoryInfo.icon;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIdx * 0.1 }}
                  className='group'
                >
                  <div
                    className={`bg-gradient-to-br ${categoryInfo.bgColor} rounded-2xl p-6 border border-gray-700 hover:border-${categoryInfo.color}-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-${categoryInfo.color}-500/10`}
                  >
                    {/* Category Header */}
                    <div className='flex items-center gap-4 mb-6'>
                      <div
                        className={`p-3 bg-${categoryInfo.color}-500/20 rounded-xl text-${categoryInfo.color}-400`}
                      >
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-white capitalize'>
                          {category}
                        </h3>
                        <p className='text-gray-400 text-sm'>
                          {skills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className='flex flex-wrap gap-3'>
                      {skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIdx * 0.05 }}
                          className={`px-4 py-2 bg-gradient-to-r from-${categoryInfo.color}-500/20 to-${categoryInfo.color}-600/20 text-${categoryInfo.color}-300 rounded-full text-sm font-medium border border-${categoryInfo.color}-500/30 hover:border-${categoryInfo.color}-500/60 transition-all duration-300 hover:scale-105`}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700'>
            <h3 className='text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3'>
              <Zap size={28} className='text-yellow-400' />
              Technology Overview
            </h3>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='p-4 bg-blue-500/20 rounded-xl text-blue-400 mx-auto mb-3 w-fit'>
                  <Code size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>8</div>
                <div className='text-gray-400 text-sm'>Languages</div>
              </div>

              <div className='text-center'>
                <div className='p-4 bg-purple-500/20 rounded-xl text-purple-400 mx-auto mb-3 w-fit'>
                  <Layers size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>7</div>
                <div className='text-gray-400 text-sm'>Frameworks</div>
              </div>

              <div className='text-center'>
                <div className='p-4 bg-green-500/20 rounded-xl text-green-400 mx-auto mb-3 w-fit'>
                  <Database size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>5</div>
                <div className='text-gray-400 text-sm'>Databases</div>
              </div>

              <div className='text-center'>
                <div className='p-4 bg-cyan-500/20 rounded-xl text-cyan-400 mx-auto mb-3 w-fit'>
                  <Cloud size={24} />
                </div>
                <div className='text-2xl font-bold text-white mb-1'>11</div>
                <div className='text-gray-400 text-sm'>Cloud & DevOps</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
