import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Zap } from 'lucide-react';
import data from '../data/data.json';

const Projects = () => {
  const getProjectIcon = title => {
    if (title.toLowerCase().includes('snip'))
      return <Code className='w-6 h-6' />;
    if (title.toLowerCase().includes('sentiment'))
      return <Zap className='w-6 h-6' />;
    return <Code className='w-6 h-6' />;
  };

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
              Featured Projects
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            A showcase of my technical projects spanning web development,
            machine learning, and innovative solutions
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='group relative'
            >
              <div
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 h-full border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() =>
                  project.link && window.open(project.link, '_blank')
                }
              >
                {/* Project Header */}
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-blue-500/20 rounded-lg text-blue-400'>
                      {getProjectIcon(project.title)}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-gray-700 hover:bg-blue-500 rounded-lg transition-colors duration-300'
                      aria-label={`Visit ${project.title} project`}
                    >
                      <ExternalLink
                        size={18}
                        className='text-gray-400 hover:text-white'
                      />
                    </a>
                  )}
                </div>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.slice(0, 4).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className='bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='bg-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs'>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Points */}
                <div className='space-y-3'>
                  {project.points.slice(0, 3).map((point, pointIdx) => (
                    <div key={pointIdx} className='flex items-start gap-3'>
                      <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0' />
                      <p className='text-gray-300 text-sm leading-relaxed'>
                        {point.length > 120
                          ? `${point.substring(0, 120)}...`
                          : point}
                      </p>
                    </div>
                  ))}
                  {project.points.length > 3 && (
                    <p className='text-gray-500 text-xs italic'>
                      +{project.points.length - 3} more achievements
                    </p>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <a
            href='https://github.com/phanivsandeep'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25'
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
